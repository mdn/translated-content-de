---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: c68f51255b41e080f34f27aafc6fcd3aafa52114
---

Als Beitragende(r) können Sie [Issues melden](#richtlinien_zum_melden_eines_issues) und [an Issues arbeiten](#richtlinien_zur_bearbeitung_eines_issues).
Nachdem Sie ein Issue gemeldet haben, wird es triagiert. Das [Triagieren von Issues](#richtlinien_für_das_triagieren_von_issues) wird normalerweise von Personen durchgeführt, die die Rolle eines Maintainers oder Besitzers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Beim Melden eines Issues oder bei der Teilnahme an einer Diskussion in einem Issue sollten Sie stets sicherstellen, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare in einem Issue konstruktiv und themenbezogen sind und nicht nur Lärm verursachen.

Folgendes ist zu beachten:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu erstellen.
- Wenn es mehrere Möglichkeiten gibt, ein Problem zu lösen, überlegen Sie, ob Sie es mit dem Personal oder der Community [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen.
  Nutzen Sie Diskussionen, um verschiedene Standpunkte zu sammeln und auf einen abgestimmten Lösungsweg zu kommen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Nachdem Sie ein Issue erstellt haben, versuchen Sie, das Problem selbst zu beheben. Es gibt einen Leitfaden zur [Einreichung und Überprüfung von Pull-Requests](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Probleme zu verkomplizieren, indem Sie versuchen, mehrere Themen zu diskutieren oder off-topic Kommentare zu machen.
- Viele Issues mit vagen Fragen zu öffnen.
- Fragen zu stellen, ohne zuerst versucht zu haben, das Problem selbst zu lösen.

Wenn Sie neue Dokumentation oder Verbesserungen der Website vorschlagen möchten, siehe [Vorschläge für neuen Inhalt oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzige umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Issue melden

Wenn Sie denken, dass Sie einen Fehler im Inhalt der MDN Web Docs oder im Aussehen der Website gefunden haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass noch niemand das Problem gemeldet hat.

### Melden eines Issues

Je nach Art des Problems, das Sie entdeckt haben, können Sie es melden, indem Sie ein Issue in einem der wichtigsten [MDN GitHub Repositories](/de/docs/MDN/Community/Our_repositories) erstellen.
Wenn die von Ihnen bereitgestellten Informationen im Issue unvollständig sind, werden Sie möglicherweise gebeten, während des [Triagierungsprozesses des Issues](#überprüfung_des_issues_auf_vollständigkeit_der_informationen) weitere Details bereitzustellen.

Hier einige Hinweise zum Erstellen von Issues:

- Wählen Sie die passende Kategorie, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die Vorlage [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content` Repository.
- Geben Sie beim Melden des Issues ausreichende Informationen an:
  - **Der Titel des Issues** sollte prägnant die _erforderliche Aktion_ vermitteln.
  - **Die Beschreibung des Issues** muss den Fehler und die Aktion zur Behebung klar beschreiben. Sie muss auch die Aufgabe oder Teilaufgaben auflisten, die zur Behebung abgeschlossen werden müssen. Einige weitere Richtlinien beinhalten:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Teilaufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issue-Beschreibung anstatt in den Kommentaren des Issues. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, den Status verschiedener Aufgaben zu ermitteln, ohne durch Kommentare scrollen zu müssen.
    - Kommentare in einem Issue sollten auf Details oder Kontexte beschränkt werden, die helfen, das Issue zu lösen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Diskussion in die [MDN-Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt, nachdem das Issue erstellt wurde.
  - Das Issue hat keinen klaren Konsens über seine Lösung.
  - Die Anforderungen zum Abschluss der Aufgabe erweitern sich während der Lösung oder die Arbeit ist unklar.
- Bei kleineren Fehlern können Sie [selbst Änderungen vornehmen](#selbst_issues_beheben) und einen Pull-Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen erstellte Issue nicht dazu dient, einen Fehler zu melden, sondern um eine Reihe von Aufgaben zu erledigen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
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

## Richtlinien zur Bearbeitung eines Issues

Denken Sie daran, dass von Ihnen erwartet wird, ein vollständiges Issue rechtzeitig abzuschließen, wenn Sie sich dafür entscheiden. Wenn Sie nach einer Woche, nachdem Ihnen das Issue zugewiesen wurde, keinen Fortschritt gemacht haben oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und heben Sie die Zuweisung des Issues auf.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit dem Label [`good first issue`, `help wanted`](#andere_labels_setzen) oder [`p3`](#festlegen_eines_prioritätslabels). Die meisten Repositories haben Issues mit diesen Labels. Sie können ein Issue auswählen, das Ihren Fähigkeiten entspricht. Ein weiterer nützlicher Ort zum Suchen von Issues ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte) filtern, die Sie interessieren. Lesen Sie die Beschreibung einiger [Labels](#andere_labels_setzen), die während des Issues-Triage-Prozesses angewandt werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` weist darauf hin, dass das MDN Web Docs Kernteam das Issue noch nicht überprüft hat, und Sie sollten nicht damit beginnen, daran zu arbeiten.

2. **Weisen Sie sich das Issue zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass es niemand anderem zugewiesen ist. Hinterlassen Sie einen Kommentar, dass Sie gerne an dem Issue arbeiten würden, und falls möglich, [weisen Sie sich das Issue selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Issues erfordern einige Untersuchungen, bevor die Arbeit beginnen kann.

   - Umreißen Sie die Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit offensichtlich ist, machen Sie es.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, erwähnen Sie ruhig @ den Poster und bitten Sie um weitere Informationen.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Machen Sie Ihre Arbeit und öffnen Sie einen [Pull-Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Beziehen Sie sich auf das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Pull-Request-Beschreibung. Je nach den von Ihnen im Pull-Request aktualisierten Dateien wird Ihrem Pull-Request automatisch ein Reviewer zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS)-Datei definiert).

   Nachdem Sie den Pull-Request geöffnet haben, informieren Sie das Team so schnell wie möglich in einem Kommentar im Pull-Request, wenn Sie feststellen, dass Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Feedbacks zu einer Überprüfung zu integrieren. Dies hilft dem Team, einem anderen interessierten Beitragenden die Arbeit am Pull-Request zu übertragen und das verknüpfte Issue zu schließen.

5. Nachdem Ihr Pull-Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als geschlossen markieren. Wenn Sie den Pull-Request mit dem Vermerk `Fixes #<issue>` eröffnet haben, wird das Issue automatisch geschlossen, wenn der Pull-Request zusammengeführt wird.

### Selbst Issues beheben

Wenn Sie einen Fehler feststellen — sei es ein Problem mit dem Aussehen der Website oder ein Fehler in der Dokumentation — können Sie versuchen, es selbst in einem [Pull-Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (wie ein Tippfehler oder eine geringfügige Satzverbesserung) oder eine schnelle Lösung erfordert, können Sie einen Pull-Request mit den entsprechenden Änderungen einreichen.

Für alle anderen Arten von Fehlern beginnen Sie mit dem [Erstellen eines Issues](#richtlinien_zum_melden_eines_issues).
Fügen Sie einen Kommentar über Ihre Absicht hinzu, an dem Issue zu arbeiten und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder Schritte zur Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnten verschwendet sein, wenn Sie einen Pull-Request öffnen, ohne zuerst ein Issue zu erstellen.
> Warten Sie darauf, dass das Issue triagiert wird, damit das MDN Web Docs-Team überprüfen kann, ob das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigen kann.

Verwenden Sie die [Richtlinien zur Bearbeitung eines Issues](#richtlinien_zur_bearbeitung_eines_issues), um das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie z.B.:

- Die **Inhalte** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository.
- Die **übersetzten Inhalte** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository.
- Das **Frontend** der MDN Web Docs im [mdn/yari](https://github.com/mdn/yari) Repository.

Jedes Repository enthält nützliche Informationen, die Sie bei der Beitragsarbeitung leiten. Weitere Informationen finden Sie in [unseren Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für das Triagieren von Issues

Wenn Sie ein Maintainer oder Eigentümer in der GitHub-Organisation der MDN Web Docs sind, sind Sie für das Triagieren von Issues in einem oder mehreren MDN Web Docs Repositories verantwortlich.

Der Gesamtprozess des Triagierens umfasst einige [allgemeine](#allgemeine_triaging-aufgaben) und einige [issue-spezifische Aufgaben](#spezifische_triagierungsaufgaben).

### Allgemeine Triaging-Aufgaben

- Wenn ein Issue eröffnet wird, wird automatisch das Label `needs triage` gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#spezifische_triagierungsaufgaben). Beitragende oder andere sollten nicht an dem Issue arbeiten, bis es triagiert wurde. (Triager sollten daran denken, das Label `needs triage` zu entfernen, nachdem das Issue triagiert wurde.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird automatisch ein zusätzliches `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, auf das Issue gesetzt. Dies wird basierend auf der im Issue genannten MDN-URL gesetzt. Sie können das content-spezifische Label verwenden, um nach Issues in Ihrem spezifischen Themenbereich zu suchen, die triagiert werden müssen.

- Wenn ein Issue ein aktives, nicht-en-US-Locale betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Locales werden diese Issues übernehmen und triagieren.

- Sie müssen nicht jederzeit aktiv Issues triagieren. Nehmen Sie sich regelmäßig Zeit, beispielsweise 30 Minuten jede Woche, um Issues in Ihrem Verantwortungsbereich zu triagieren. Triaging muss nicht als Teil eines synchronen Treffens oder zur gleichen Zeit wie alle anderen durchgeführt werden, sollte aber regelmäßig erfolgen, um sicherzustellen, dass der Rückstau untriagierter Fehler nicht zu hoch wird.

- Abgesehen vom Triagieren eingehender Issues jede Woche, überprüfen Sie die Liste der alten Fehler, um festzustellen, ob es einige gibt, die feststecken, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität aufweisen.
  - Überprüfen Sie zugewiesene, noch offene Issues, um festzustellen, ob der Zuweisende Fortschritte macht. Wenn nach einer Woche keine Fortschritte erzielt wurden, fragen Sie ihn/sie, ob er/sie noch Zeit hat, an dem Issue zu arbeiten. Wenn eine weitere Woche ohne Fortschritt vergeht, entziehen Sie ihm/ihr die Zuweisung und hinterlassen Sie einen Kommentar, dass Sie das Issue für andere interessierte Beitragende freigeben.
  - Wenn ein Pull-Request eröffnet wurde, um das Issue zu beheben, aber eine Woche nicht überprüft wurde, geben Sie dem Reviewer einen sanften Hinweis, ob er es sich ansehen kann.
  - Wenn ein Pull-Request, der das Issue beheben soll, auf die Behebung von Überprüfungskommentaren wartet, bitten Sie den Autor, innerhalb einer Woche zu antworten. Wenn noch eine Woche vergeht, beheben Sie die Überprüfungskommentare entweder selbst, wenn Sie Zeit haben, oder schließen Sie den Pull-Request und entziehen Sie dem zugehörigen Issue die Zuweisung.

### Spezifische Triagierungsaufgaben

Dies sind die Richtlinien, die beim Triagieren jedes Issues befolgt werden sollten.

#### Überprüfung, ob das Issue gültig ist

Dies sind einige der Punkte, die beim Überprüfen der Gültigkeit eines Issues zu beachten sind:

- Überprüfen Sie, ob das erhobene Issue gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob die Auswirkungen der Behebung gering oder auf der gesamten Website sichtbar sein werden.
- Beurteilen Sie, ob die Behebung des Issues zuerst eine Diskussion erfordert, in welchem Fall Sie dem Autor raten, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung des Issues auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Arbeit an dem Fehler beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispielseite der MDN Web Docs, falls das Problem auf mehreren Seiten besteht.
- Die spezifische Überschrift oder Abschnitt auf der MDN Web Docs-Seite, auf der das Problem gefunden wurde.
- Eine klare Beschreibung der inkorrekten, nicht hilfreichen, unvollständigen oder fehlenden Informationen.

Wenn eine der obigen Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label auf das Issue setzen. Fahren Sie mit dem Triaging des Issues erst fort, nachdem diese Details bereitgestellt wurden (danach können Sie das `needs info` Label entfernen). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Authors zu warten.

#### Festlegen eines Prioritätslabels

Weisen Sie jedem Fehler ein Prioritätslabel gemäß dem Schweregrad des Issues zu, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Dieser Typ von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo er auf der Website erscheint. Diese Art von Issues könnte den Ruf von MDN ernsthaft beschädigen und/oder Benutzer schädigen. Beispiele hierfür sind ein fehlerhafter Code-Schnipsel, der bei Anwendung in der Produktion ein schwerwiegendes Sicherheitsproblem hervorrufen könnte, sowie unerwünschter Inhalt wie Malware, Obszönität, Pornografie, Hassrede oder Links zu solchen Inhalten.

  - Label: `p0` (wird sofort behoben)

- Schwerwiegendes Issue: Dieser Issue-Typ könnte die Nützlichkeit einer Seite erheblich beeinträchtigen. Beispiele sind eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine umfangreiche Menge an schlecht geschriebenem und schwer verständlichem Prosa, oder eine große Anzahl von defekten Links.

  - Labels: `p1` (wird bald behoben) und `p2` (wird bald behoben, aber wichtigere Punkte haben Vorrang)

- Kleines Issue: Dies ist eine Art von Verbesserung, die den vorhandenen Inhalt besser machen kann, aber das Lernen nicht beeinträchtigt oder nur geringfügige Auswirkungen auf das Lernen hat. Da diese Arten von Issues nicht aktiv geplant sind, ist Hilfe von Beitragenden, diese Issues zu beheben, willkommen und sehr geschätzt. Die Behebung einiger dieser Issues kann auch den notwendigen Übungskomfort für Anfänger bieten, die mit dem Beitragsprozess vertraut werden. Beispiele sind Tippfehler, schlechte Grammatik, ein defekter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder ein Code-Schnipsel, der nicht funktioniert.
  - Labels: `p3` (keine Sicht, wann das Issue behoben wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von MDN Web Docs-Mitarbeitern und Kollegen behandelt.

#### Hinzufügen von hilfreichen Informationen

Falls möglich, fügen Sie Informationen hinzu, die Beitragenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlich behobenen Issues oder Ressourcen zum Lesen vorliegen. Ein gut ausgearbeiteter Plan oder Schritte sind besonders notwendig bei Issues, die mit `good first issue` gekennzeichnet sind, und können neuen Beitragenden helfen, schnell mit dem Beitragsprozess vertraut zu werden. Sie können diese Aufgabe auf 5-10 Minuten zeitlich begrenzen.

Zum Beispiel können Sie als Triager die folgenden Informationen dem Issue hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Andere Labels setzen

Setzen Sie anschließend die folgenden Labels, wenn sie angemessen sind:

- `effort: small`, `effort: medium`, `effort: large`: Einige Beitragende suchen gerne nach Fehlern basierend auf der Zeit und dem Aufwand, die erforderlich sind, um den Fehler zu beheben. Wo möglich, sollten Sie versuchen, eine Schätzung des erforderlichen Aufwands bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf ein Issue, wenn die Behebung des Issues wirklich einfach ist und das Beheben des Issues einer Person, die neu ist und den Prozess kennenlernen möchte, gute Übung bieten würde.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem erfordert, der sich mit dem Thema auskennt. Dies ist ein beliebtes Label, und einige Beitragende verwenden es, um nach Issues in Open-Source-Projekten in ihren Fachkenntnisbereichen zu suchen, an denen sie arbeiten möchten.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen defekten Link zu einer externen Seite beinhaltet.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, üblicherweise weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Fehlerbehebung in einem anderen Repository eine entsprechende Korrektur im `mdn/content` Repository erfordert.

  > [!NOTE]
  > Entfernen Sie nach Abschluss des Triagierungsprozesses das Label `needs triage`.
