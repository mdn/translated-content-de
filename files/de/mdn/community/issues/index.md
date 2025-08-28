---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: a2b29d9159294f1437e0adf49cdf3019e9c1c24b
---

Als Mitwirkender können Sie [Issues melden](#richtlinien_für_das_melden_eines_issues) und an [Issues arbeiten](#richtlinien_für_das_arbeiten_an_einem_issue).
Nachdem Sie ein Issue gemeldet haben, wird das Issue triagiert. Das [Triagieren von Issues](#richtlinien_für_das_triagieren_von_issues) wird typischerweise von Personen durchgeführt, die die Rolle eines Maintainers oder Besitzers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Stellen Sie beim Melden eines Issues oder bei der Teilnahme an einer Diskussion in einem Issue sicher, dass Ihre Beiträge zur Gesamtentwicklung des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare in einem Issue konstruktiv und themenbezogen sind und nicht nur Lärm erzeugen.

Tun Sie Folgendes:

- Wenn Sie eine Frage haben, können Sie diese in den [Chatrooms der MDN Web Docs](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu erstellen.
- Wenn es viele Möglichkeiten gibt, ein Problem zu beheben, überlegen Sie, ob Sie es mit dem Personal/die Gemeinschaft [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und sich auf einen vereinbarten Handlungsverlauf zu einigen. Dies trägt dazu bei, dass Issues fokussiert und produktiv bleiben.
- Versuchen Sie, nachdem Sie ein Issue erstellt haben, das Problem selbst zu beheben. Es gibt einen Leitfaden zur [Einreichung und Überprüfung von Pull Requests](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragprozess wissen müssen.

Vermeiden Sie Folgendes:

- Komplexität in Issues bringen, indem Sie versuchen, mehrere Themen zu diskutieren oder Off-Topic-Kommentare abzugeben.
- Eine große Anzahl von Issues eröffnen, in denen vage Fragen gestellt werden.
- Fragen stellen, ohne zuerst zu versuchen, das Problem selbst zu lösen.

Wenn Sie neue Dokumentationen oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, sehen Sie unter [Vorschlagen neuer Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals) nach.

## Richtlinien für das Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung von zusammenhängenden umsetzbaren Aufgaben sein und muss ein klares Ergebnis haben.

### Vor dem Erstellen eines Issues

Wenn Sie glauben, einen Fehler im Inhalt der MDN Web Docs oder im Erscheinungsbild der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass niemand sonst das Issue gemeldet hat.

### Ein Issue melden

Abhängig von der Art des Problems, das Sie entdeckt haben, können Sie es melden, indem Sie ein Issue in einem der Hauptrepositories von [MDN GitHub](/de/docs/MDN/Community/Our_repositories) erstellen. Wenn die von Ihnen im Issue bereitgestellten Informationen unvollständig sind, werden Sie möglicherweise aufgefordert, während des [Issue-Triagierprozesses](#überprüfung_des_issues_auf_vollständigkeit_der_informationen) weitere Details bereitzustellen.

Hier sind einige Tipps zum Eröffnen von Issues:

- Wählen Sie die geeignete Kategorie aus, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Inhalts-Fehler](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml)-Vorlage im `mdn/content` Repository.
- Stellen Sie ausreichende Informationen beim Melden des Issues bereit:
  - Der **Titel des Issues** muss die _erforderliche Aktion_ prägnant übermitteln.
  - Die **Beschreibung des Issues** muss den Fehler und die zur Behebung erforderliche Aktion klar beschreiben. Sie muss auch die zu erledigenden Aufgaben oder Unteraufgaben zur Behebung des Issues auflisten. Einige weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder der Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issue-Beschreibung anstelle von Kommentaren im Issue. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, möglicherweise durch Kommentare im Issue zu scrollen, um den Status der verschiedenen Aufgaben zu bestimmen.
    - Kommentare in einem Issue sollten auf Details oder Kontexte beschränkt bleiben, die bei der Lösung des Issues helfen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Konversation auf [MDN's Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss geführt werden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach der Eröffnung des Issues.
  - Es gibt keinen klaren Konsens über die Lösung des Issues.
  - Die Anforderungen zur Erledigung der Aufgabe werden während ihrer Lösung erweitert oder die Arbeit ist unklar.
- Für kleinere Fehler können Sie [selbst Änderungen vornehmen](#probleme_selbst_beheben) und einen Pull Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das Issue, das Sie eröffnen, nicht dazu dient, einen Fehler zu melden, sondern eine Reihe von Aufgaben auszuführen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
Erklären Sie den Kontext oder Grund für die Ausführung der Aufgaben in der Beschreibung.
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

## Richtlinien für das Arbeiten an einem Issue

Denken Sie daran, dass die Erwartung besteht, dass die Arbeit abgeschlossen wird, wenn Sie ein Issue übernehmen. Wenn Sie in der Woche nach der Zuordnung nicht vorankommen oder die erforderliche Aufgabe nicht mehr abschließen können, hinterlassen Sie einen Kommentar und weisen Sie sich selbst vom Issue ab.

Dies sind die allgemeinen Schritte, um an einem Issue zu arbeiten:

1. **Ein Issue finden:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit dem Label [`good first issue`, `help wanted`](#andere_labels_setzen) oder [`p3`](#ein_prioritätslabel_setzen). Die meisten Repositories haben Issues mit diesen Labels. Sie sind eingeladen, durchzustöbern und ein Issue auszuwählen, das zu Ihren Fähigkeiten passt. Ein anderer nützlicher Ort, um nach Issues zu suchen, an denen man arbeiten kann, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen, die Sie interessieren, (`Labels`-Spalte) filtern. Sehen Sie sich die Beschreibung einiger der [Labels](#andere_labels_setzen) an, die während des Issue-Triage-Prozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Issue noch nicht überprüft hat und Sie noch nicht daran arbeiten sollten.

2. **Das Issue sich selbst zuordnen:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass das Issue niemand anderem zugeordnet ist. Fügen Sie einen Kommentar hinzu, in dem Sie angeben, dass Sie an dem Issue arbeiten möchten, und wenn Sie dazu in der Lage sind, [ordnen Sie das Issue sich selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Durchführung der Recherche:** Die meisten Issues erfordern eine Untersuchung, bevor die Arbeit beginnen kann.
   - Umreißen Sie die Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie diese in den [Chatrooms der MDN Web Docs](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit offensichtlich ist, machen Sie einfach weiter.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, dürfen Sie den Ersteller @erwähnen und nach weiteren Informationen fragen.

4. **Änderungen vornehmen:** Forken und verzweigen Sie das Repository. Machen Sie Ihre Arbeit und öffnen Sie einen [Pull Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Verweisen Sie auf das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Pull Request-Beschreibung. Abhängig von den Dateien, die Sie im Pull Request aktualisiert haben, wird Ihrem Pull Request automatisch ein Reviewer zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS)-Datei definiert.)

   Wenn Sie feststellen, dass Sie nach dem Öffnen des Pull Requests keine Zeit mehr haben, um Änderungen vorzunehmen oder Feedback zur Überprüfung zu integrieren, informieren Sie das Team so schnell wie möglich in einem Kommentar im Pull Request. Dies wird dem Team helfen, einen anderen interessierten Mitwirkenden zuzuweisen, um die Arbeit am Pull Request abzuschließen und das verknüpfte Issue zu schließen.

5. Nachdem Ihr Pull Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als geschlossen markieren. Wenn Sie den Pull Request mit dem Ausdruck `Fixes #<issue>` geöffnet haben, wird das Issue automatisch geschlossen, sobald der Pull Request zusammengeführt wird.

### Probleme selbst beheben

Wenn Sie einen Fehler entdecken – sei es ein Problem mit dem Erscheinungsbild der Website oder ein Fehler in der Dokumentation – können Sie versuchen, diesen selbst in einem [Pull Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (wie ein Tippfehler oder eine geringfügige Verbessserung des Satzes) oder eine schnelle Korrektur erfordert, können Sie einen Pull Request mit den entsprechenden Änderungen einreichen.

Für alle anderen Arten von Fehlern beginnen Sie mit dem [Erstellen eines Issues](#richtlinien_für_das_melden_eines_issues).
Fügen Sie einen Kommentar zu Ihrer Absicht, an dem Issue zu arbeiten, hinzu und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder Schritte zur Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnten verschwendet sein, wenn Sie einen Pull Request einreichen, ohne vorher ein Issue zu erstellen.
> Warten Sie, bis das Issue triagiert ist, damit das MDN Web Docs Team überprüfen kann, ob das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigen.

Unter Verwendung der [Richtlinien zur Arbeit an einem Issue](#richtlinien_für_das_arbeiten_an_einem_issue) versuchen Sie, das Problem durch Aktualisierung der entsprechenden Quelle zu beheben, wie:

- Den **Inhalt** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Den **übersetzten Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/fred](https://github.com/mdn/fred) Repository

Jedes Repository enthält nützliche Informationen darüber, wie Sie beitragen können.
Weitere Informationen finden Sie unter [unseren Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für das Triagieren von Issues

Wenn Sie ein Maintainer oder Besitzer in der MDN Web Docs GitHub-Organisation sind, sind Sie verantwortlich für das Triagieren von Issues in einem oder mehreren MDN Web Docs Repositorys.

Der allgemeine Prozess für das Triagieren umfasst einige [allgemeine](#allgemeine_triagieraufgaben) und einige [issue-spezifische Aufgaben](#issue-spezifische_triagieraufgaben).

### Allgemeine Triagieraufgaben

- Wenn ein Issue eröffnet wird, wird das Label `needs triage` automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#issue-spezifische_triagieraufgaben). Mitwirkende oder jemand anderes sollte nicht an dem Issue arbeiten, bis das Issue triagiert wurde. (Die Triager sollten daran denken, das `needs triage` Label nach dem Triagieren des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird zusätzlich ein `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch auf das Issue gesetzt. Dieses wird basierend auf der im Issue erwähnten MDN-URL gesetzt. Sie können das inhaltsspezifische Label verwenden, um nach Issues zu suchen, die in Ihrem spezifischen Themenbereich triagiert werden müssen.

- Wenn ein Issue ein aktives, nicht-en-US-Locale betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Locales werden diese Issues aufnehmen und triagieren.

- Es ist nicht notwendig, Issues ständig aktiv zu triagieren. Nehmen Sie sich regelmäßig Zeit, beispielsweise 30 Minuten jede Woche, um Issues in Ihrem Verantwortungsbereich zu triagieren. Triagieren muss nicht als Teil eines synchronen Meetings oder sogar zur gleichen Zeit wie alle anderen durchgeführt werden, aber es sollte regelmäßig durchgeführt werden, um sicherzustellen, dass die Anzahl der nicht triagierten Fehler nicht zu hoch wird.

- Abgesehen vom wöchentlichen Triagieren eingehender Issues überprüfen Sie die Liste alter Fehler, um festzustellen, ob es welche gibt, die gestoppt, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um festzustellen, ob der Zuweisende Fortschritte macht. Wenn nach einer Woche nach der Zuweisung kein Fortschritt erfolgt ist, fragen Sie nach, ob der Zuweisende noch Zeit hat, an dem Issue zu arbeiten. Wenn nach einer weiteren Woche kein Fortschritt erfolgt, entziehen Sie dem Zuweisenden die Zuweisung und hinterlassen Sie einen Kommentar, in dem Sie angeben, dass Sie das Issue für andere interessierte Mitwirkende verfügbar machen.
  - Wenn ein Pull Request eröffnet wurde, um das Issue zu beheben, aber eine Woche lang nicht überprüft wurde, geben Sie dem Reviewer einen sanften Anstoß und fragen Sie, ob er/sie dazu kommen kann.
  - Wenn ein Pull Request zur Behebung des Issues auf die Beantwortung von Überprüfungskommentaren wartet und eine Woche vergangen ist, fragen Sie den Autor, ob er/sie auf die Überprüfung antworten kann. Wenn eine weitere Woche vergeht, können Sie entweder die Überprüfungskommentare selbst beheben, wenn Sie Zeit haben, oder den Pull Request schließen und das zugehörige Issue erneut freigeben.

### Issue-spezifische Triagieraufgaben

Dies sind die Richtlinien, die beim Triagieren jedes Issues beachtet werden müssen.

#### Überprüfen, ob das Issue gültig ist

Dies sind einige der Dinge, die Sie beim Überprüfen der Gültigkeit eines Issues beachten sollten:

- Überprüfen Sie, ob das gemeldete Issue gültig ist und ob die Lösung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob der Einfluss der Lösung gering oder auf der gesamten Website vorhanden sein wird.
- Bewerten Sie, ob für die Behebung des Issues zuerst eine Diskussion erforderlich ist. In diesem Fall sollte der Autor aufgefordert werden, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung des Issues auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Bearbeitung des Fehlers beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder Abschnitt auf der MDN Web Docs Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unbeholfenen, unvollständigen oder fehlenden Informationen

Wenn eine der obigen Informationen fehlt, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label auf das Issue setzen. Fahren Sie mit dem Triagieren des Issues erst fort, nachdem diese Details bereitgestellt wurden (nachdem Sie das `needs info` Label entfernen können). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Ein Prioritätslabel setzen

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Issues, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Website erscheint. Diese Art von Issue könnte den Ruf von MDN ernsthaft schädigen und/oder Benutzern schaden. Beispiele für diesen Typ von Issue umfassen einen falschen Codeausschnitt, der, wenn er in der Produktion verwendet wird, ein schwerwiegendes Sicherheitsproblem und ungewünschte Inhalte wie Malware, Obszönitäten, Pornografie, Hassreden oder Links zu solchen Inhalten schaffen könnte.
  - Label: `p0` (wird sofort behandelt)

- Großes Issue: Diese Art von Issue könnte die Nützlichkeit einer Seite ernsthaft beeinträchtigen. Zum Beispiel eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine erhebliche Menge schlecht geschriebener und schwer verständlicher Prosa oder eine große Anzahl fehlerhafter Links.
  - Label: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber höher priorisierte Elemente haben Vorrang)

- Kleines Issue: Dies ist eine Art von Verbesserungsissue, das den bestehenden Inhalt verbessern kann, aber das Lernen nicht beeinflusst oder nur einen geringfügigen Einfluss auf das Lernen hat. Da diese Arten von Issues nicht aktiv geplant sind, ist Hilfe von Mitwirkenden zur Behebung dieser Issues willkommen und wird sehr geschätzt. Das Beheben einiger dieser Issues kann auch die notwendige Praxis für Anfänger-Mitarbeiter bieten, die gerade erst mit dem Beitragsprozess vertraut werden. Beispiele umfassen Tippfehler, schlechtes Grammatik, einen kaputten Link, eine kleine Menge alter Informationen oder schlecht geschriebene Prosa, oder ein Codeausschnitt, der nicht funktioniert.
  - Label: `p3` (keine Sichtbarkeit, wann das Issue behandelt wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von MDN Web Docs Mitarbeitern und Kollegen abgewickelt.

#### Hilfreiche Informationen hinzufügen

Fügen Sie, wenn möglich, Informationen hinzu, die Mitwirkenden bei der Behebung des Issues helfen können. Die Informationen können in Form von Schritten, allgemeinen Vorgehensweisen, Links zu anderen ähnlich behobenen Issues oder Lesematerialien vorhanden sein. Ein gut ausgelegter Plan oder Schritte sind insbesondere für Issues erforderlich, die mit `good first issue` gekennzeichnet sind und neuen Mitwirkenden helfen können, schnell hochzufahren. Diese Aufgabe kann auf 5-10 Minuten zeitlich begrenzt werden.

Zum Beispiel können Sie als Triager die folgenden Informationen zu dem Issue hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Andere Labels setzen

Setzen Sie als nächstes die folgenden Labels nach Bedarf:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende suchen gerne nach Fehlern basierend auf der Zeit und den Bemühungen, die zur Behebung des Fehlers erforderlich sind. Wo dies möglich ist, sollten Sie versuchen, eine Schätzung des erforderlichen Aufwands bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung des Issues wirklich einfach ist und wenn das Beheben des Issues eine gute Übung für einen Neuling darstellen würde, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem erfordert, der sich mit dem Thema auskennt. Dies ist ein beliebtes Label und einige Mitwirkende verwenden es, um nach Issues zu suchen, an denen sie in Open-Source-Projekten arbeiten können, die in ihren Interessen- oder Fachbereichen liegen.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen kaputten Link zu einer externen Seite umfasst.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, meist weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Issue-Fix in einem anderen Repository auch eine entsprechende Lösung im `mdn/content` Repository erfordert.

  > [!NOTE]
  > Entfernen Sie nach dem Abschluss des Triagierungsprozesses das `needs triage` Label.
