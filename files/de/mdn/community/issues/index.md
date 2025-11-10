---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Als Beitragende(r) können Sie [Issues melden](#leitlinien_zur_meldung_eines_issues) und an ihnen [arbeiten](#leitlinien_für_die_bearbeitung_von_issues).
Nach der Meldung eines Issues wird es triagiert. [Triagierung](#leitlinien_zur_triagierung_von_issues) von Issues wird in der Regel von Personen durchgeführt, die die Rolle eines Betreuers oder Eigentümers übernommen haben.

## Allgemeine Leitlinien für die Teilnahme

Wenn Sie ein Issue melden oder an einer Diskussion zu einem Issue teilnehmen, stellen Sie sicher, dass Ihre Beiträge zum allgemeinen Fortschritt des Projekts beitragen. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare konstruktiv und themenbezogen sind und nicht nur Lärm erzeugen.

Tun Sie Folgendes:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu eröffnen.
- Wenn es mehrere Möglichkeiten gibt, ein Problem zu beheben, überlegen Sie, ob Sie es mit dem Personal/der Gemeinschaft [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) müssen. Nutzen Sie Diskussionen, um unterschiedliche Standpunkte zu gewinnen und sich auf einen abgestimmten Handlungsplan zu einigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Nachdem Sie ein Issue eröffnet haben, versuchen Sie, das Problem selbst zu beheben. Es gibt einen Leitfaden zur [Einsendung und Überprüfung von Pull-Requests](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Verkomplizieren von Issues, indem Sie versuchen, mehrere Themen zu diskutieren oder nicht-relevante Kommentare zu machen.
- Eröffnen vieler Issues mit vagen Fragen.
- Fragen stellen, ohne zuerst selbst versucht zu haben, das Problem zu lösen.

Wenn Sie neue Dokumentationen oder Wege zur Verbesserung der Webseite vorschlagen möchten, siehe [Vorschläge für neue Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Leitlinien zur Meldung eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) werden verwendet, um Bugs zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Issue erstellen

Wenn Sie glauben, einen Fehler im Inhalt der MDN Web Docs oder im Erscheinungsbild der Webseite gefunden zu haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories), um sicherzustellen, dass niemand anderes das Issue bereits gemeldet hat.

### Meldung eines Issues

Je nach Art des Problems, das Sie entdeckt haben, können Sie es melden, indem Sie ein Issue in einem der Haupt-[MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) erstellen.
Wenn die Informationen, die Sie im Issue bereitstellen, unvollständig sind, werden Sie möglicherweise gebeten, während des [Issue-Triage-Prozesses](#überprüfung_des_issues_auf_vollständigkeit_der_informationen) weitere Details anzugeben.

Hier sind einige Hinweise zum Erstellen von Issues:

- Wählen Sie die passende Kategorie, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Inhalts-Issue-Vorlage](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im `mdn/content`-Repository.
- Geben Sie beim Melden des Issues genügend Informationen an:
  - **Titel des Issues** muss prägnant die _erforderliche Aktion_ vermitteln.
  - **Beschreibung des Issues** soll den Fehler und die erforderlichen Maßnahmen zur Behebung des Issues klar beschreiben. Sie soll auch die zu erledigenden Aufgaben oder Teilaufgaben zur Lösung des Issues auflisten. Einige weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Teilaufgaben mittels Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issue-Beschreibung anstatt in Kommentaren. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Issue aus mehreren Teilen besteht. Dies hilft anderen, die sonst durch Kommentare scrollen müssen, um den Status verschiedener Aufgaben zu bestimmen.
    - Kommentare in einem Issue sollten sich auf Details oder Kontexte beschränken, die helfen, das Issue zu lösen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verlagern Sie die Diskussion auf [MDNs Diskussionen auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach Eröffnung des Issues.
  - Keine klare Einigung über die Lösung des Issues vorliegt.
  - Die Anforderungen zur Erledigung der Aufgabe erweitern sich während der Bearbeitung oder die Arbeit ist unklar.
- Bei kleineren Bugs können Sie [die Änderungen selbst vornehmen](#beheben_von_issues_selbst) und einen Pull-Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen eröffnete Issue nicht dazu dient, einen Fehler zu melden, sondern eine Reihe von Aufgaben auszuführen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
Erläutern Sie den Kontext oder Grund für die Ausführung der Aufgaben in der Beschreibung.
Stellen Sie sicher, dass Sie alle umsetzbaren Aufgaben als Checkliste auflisten.

Zum Beispiel:

```md
// Issue title
Ensure sections follow the order defined in the CSS property template

### Description

The CSS property page template is defined [here](/en-US/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template).
The task list in this issue will be used to compare the documented CSS properties with the template and track changes to the property pages for compliance.

### List of pages checked

- [x] [accent-color](/en-US/docs/Web/CSS/Reference/Properties/accent-color) - checked, okay
- [ ] [backdrop-filter](/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)
- [ ] [letter-spacing](/en-US/docs/Web/CSS/Reference/Properties/letter-spacing) - open pull request to move `Accessibility concerns` and `Internationalization concerns` sections before the `Specifications` section.
```

## Leitlinien für die Bearbeitung von Issues

Denken Sie daran, dass, wenn Sie sich einem Issue annehmen, davon ausgegangen wird, dass die Arbeit in einem zeitgemäßen Rahmen abgeschlossen wird. Wenn Sie eine Woche nach Zuweisung keine Fortschritte machen können oder nicht mehr in der Lage sind, die erforderliche Aufgabe abzuschließen, hinterlassen Sie einen Kommentar und weisen Sie sich selbst von der Issue ab.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Finden Sie ein Issue:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit dem Label [`good first issue`, `help wanted`](#setzen_anderer_labels) oder [`p3`](#festlegung_eines_prioritäts-labels). Die meisten Repositories haben Issues mit diesen Labels. Sie sind willkommen, ein Issue auszuwählen, das zu Ihren Fähigkeiten passt. Ein weiterer nützlicher Ort, um nach Issues zu suchen, ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels`-Spalte) filtern, die Sie interessieren. Sehen Sie sich die Beschreibung einiger [Labels](#setzen_anderer_labels) an, die während des Issue-Triage-Prozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das Core-Team der MDN Web Docs das Issue noch nicht überprüft hat und Sie nicht daran arbeiten sollten.

2. **Weisen Sie das Issue sich selbst zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass es keiner anderen Person zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie an dem Issue arbeiten möchten, und wenn Sie können, [weisen Sie sich das Issue selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Recherchieren Sie:** Die meisten Issues erfordern einige Untersuchungen, bevor die Arbeit beginnen kann.
   - Ermitteln Sie den Umfang der Arbeit, die erledigt werden muss. Wenn Sie Fragen stellen müssen, stellen Sie sie in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit ziemlich offensichtlich ist, machen Sie sich an die Arbeit.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, zögern Sie nicht, den Verfasser zu erwähnen und nach mehr Informationen zu fragen.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Führen Sie Ihre Arbeit aus und öffnen Sie einen [Pull-Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Referenzieren Sie das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Pull-Request-Beschreibung. Je nach den Dateien, die Sie im Pull-Request aktualisiert haben, wird Ihrem Pull-Request automatisch ein Prüfer zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS)-Datei definiert).

   Nachdem Sie den Pull-Request eröffnet haben, und Sie merken, dass Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Feedback zu berücksichtigen, lassen Sie das Team in einem Kommentar im Pull-Request wissen, was los ist. Dies hilft dem Team, einen weiteren interessierten Beitragenden zuzuweisen, um die Arbeit am Pull-Request abzuschließen und das verlinkte Issue zu schließen.

5. Nachdem Ihr Pull-Request überprüft und zusammengeführt wurde, können Sie das verlinkte Issue als geschlossen markieren. Wenn Sie den Pull-Request mit dem Ausdruck `Fixes #<issue>` eröffnet haben, wird das Issue automatisch geschlossen, wenn der Pull-Request zusammengeführt wird.

### Beheben von Issues selbst

Wenn Ihnen ein Fehler auffällt – sei es ein Problem mit dem Erscheinungsbild der Webseite oder ein Fehler in der Dokumentation – können Sie versuchen, ihn selbst in einem [Pull-Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (wie ein Tippfehler oder eine geringfügige Satzverbesserung) oder eine schnelle Lösung erfordert, können Sie einen Pull-Request mit den passenden Änderungen einreichen.

Für jede andere Art von Fehler beginnen Sie mit der [Erstellung eines Issues](#leitlinien_zur_meldung_eines_issues).
Fügen Sie einen Kommentar über Ihre Absicht hinzu, an dem Issue zu arbeiten und, wenn möglich, beschreiben Sie Ihren vorgeschlagenen Lösungsweg oder die Schritte zur Behebung des Problems.

> [!NOTE]
> Ihre Zeit und Mühe könnten vergeudet werden, wenn Sie einen Pull-Request öffnen, ohne zuerst ein Issue zu eröffnen.
> Warten Sie darauf, dass das Issue triagiert wird, damit das MDN Web Docs Team überprüfen kann, dass das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt.

Verwenden Sie die [Leitlinien zur Bearbeitung eines Issues](#leitlinien_für_die_bearbeitung_von_issues), um zu versuchen, das Problem durch Aktualisierung der entsprechenden Quelle zu beheben, wie z.B.:

- Die MDN Web Docs **Inhalte** (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Die MDN Web Docs **Übersetzten Inhalte** im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/fred](https://github.com/mdn/fred) Repository

Jedes Repository enthält nützliche Informationen, um Sie anzuleiten, wie Sie beitragen können.
Für weitere Informationen siehe [unsere Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Leitlinien zur Triagierung von Issues

Wenn Sie ein Betreuer oder Eigentümer in der MDN Web Docs GitHub-Organisation sind, sind Sie dafür verantwortlich, Issues in einem oder mehreren MDN Web Docs Repositories zu triagieren.

Der Gesamtprozess der Triagierung umfasst einige [allgemeine](#allgemeine_triagierungsaufgaben) und einige [issuespezifische Aufgaben](#issuespezifische_triagierungsaufgaben).

### Allgemeine Triagierungsaufgaben

- Wenn ein Issue eröffnet wird, wird das `needs triage` Label automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [triagiert werden müssen](#issuespezifische_triagierungsaufgaben). Beitragende oder andere Personen sollten nicht an dem Issue arbeiten, bis es triagiert wurde. (Triagierer sollten daran denken, das `needs triage` Label nach der Triagierung des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch auf das Issue gesetzt. Dies wird basierend auf der in dem Issue erwähnten MDN-URL gesetzt. Sie können das inhaltspezifische Label verwenden, um nach Issues in Ihrem spezifischen Themenbereich zu suchen, die triagiert werden müssen.

- Wenn ein Issue ein aktives, nicht-en-US-Format betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Formate werden diese Issues aufnehmen und triagieren.

- Sie müssen nicht ständig aktiv Issues triagieren. Legen Sie sich Zeitfenster von etwa 30 Minuten pro Woche fest, um Issues regelmäßig in Ihrem Verantwortungsbereich zu triagieren. Triagierung muss nicht als Teil eines synchronen Meetings oder sogar zur gleichen Zeit wie alle anderen durchgeführt werden, aber es sollte regelmäßig geschehen, um sicherzustellen, dass der Rückstand an untriagierten Bugs nicht zu groß wird.

- Neben der Triagierung eingehender Issues jede Woche, überprüfen Sie die Liste der alten Bugs, um zu sehen, ob es welche gibt, die festgefahren sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität aufweisen.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um zu sehen, ob der/die Beauftragte Fortschritte macht. Wenn eine Woche lang keine Fortschritte gemacht wurden, fragen Sie ihn/sie, ob er/sie noch Zeit hat, an dem Issue zu arbeiten. Wenn nach einer weiteren Woche immer noch keine Fortschritte erzielt werden, weisen Sie das Issue neu zu und hinterlassen Sie einen Kommentar, dass Sie das Issue für andere interessierte Beitragende freigeben.
  - Wenn ein Pull-Request eröffnet wurde, um das Issue zu beheben, aber nach einer Woche nicht überprüft wurde, geben Sie dem Prüfer einen sanften Hinweis, ob er/sie es überprüfen kann.
  - Wenn ein Pull-Request zur Behebung des Issues auf Überprüfungskommentare wartet, die nach einer Woche nicht angesprochen wurden, dann fragen Sie den Autor, ob er/sie auf seine/ihr Überprüfung reagieren kann. Wenn eine weitere Woche vergeht, beheben Sie entweder die Überprüfungskommentare selbst, wenn Sie Zeit haben, oder schließen Sie den Pull-Request und weisen das zugehörige Issue neu zu.

### Issuespezifische Triagierungsaufgaben

Dies sind die Richtlinien, die bei der Triagierung jedes Issues befolgt werden müssen.

#### Überprüfung, ob das Issue gültig ist

Dies sind einige Punkte, die bei der Überprüfung der Gültigkeit eines Issues zu beachten sind:

- Prüfen Sie, ob das erhobene Issue gültig ist und ob die Behebung den Inhalt für die Leser und die Webseite verbessern wird.
- Bewerten Sie, ob der Einfluss der Behebung gering oder auf der ganzen Webseite bemerkbar sein wird.
- Bewerten Sie, ob die Lösung des Issues zuerst einer Diskussion bedarf, in diesem Fall verweisen Sie den Autor, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung des Issues auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass es die beschriebenen Informationen enthält, damit jemand mit der Arbeit am Bug beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispielseite der MDN Web Docs, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder Abschnitt auf der MDN Web Docs-Seite, in dem das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unhilfreichen, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das `needs info` Label zum Issue hinzufügen. Fahren Sie mit der Triagierung des Issues erst fort, nachdem diese Details bereitgestellt wurden (danach können Sie das `needs info` Label entfernen). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Festlegung eines Prioritäts-Labels

Für jeden Bug setzen Sie ein Prioritäts-Label basierend auf der Schwere des Issues, um Menschen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Seite erscheint. Diese Art von Issue könnte den Ruf von MDN erheblich schädigen und/oder Benutzern schaden. Beispiele für solche Issues sind ein falscher Code-Schnipsel, der, wenn er in der Produktion verwendet wird, ein schwerwiegendes Sicherheitsproblem verursachen könnte, sowie unangemessener Inhalt wie Malware, Obszönitäten, Pornografie, Hassreden oder Links zu solchen Inhalten.
  - Label: `p0` (wird sofort behandelt)

- Schwerwiegendes Issue: Diese Art von Issue könnte die Nützlichkeit einer Seite erheblich beeinträchtigen. Zum Beispiel eine erhebliche Menge veralteter Informationen, ein komplexes und wichtiges Code-Beispiel, das nicht funktioniert, eine erhebliche Menge schlecht geschriebener und schwer verständlicher Prosa oder eine große Anzahl defekter Links.
  - Labels: `p1` (wird bald behandelt) und `p2` (wird bald behandelt, aber höher priorisierte Elemente haben Vorrang)

- Kleines Issue: Dies ist eine Art von Verbesserungs-Issue, das den bestehenden Inhalt besser machen kann, aber das Lernen nicht beeinträchtigt oder nur geringe Auswirkungen auf das Lernen hat. Da diese Art von Issues nicht aktiv geplant werden, ist Hilfe von Beiträgen, um diese Issues zu beheben, willkommen und sehr geschätzt. Einige dieser Issues zu beheben kann auch Anfängern das notwendige Übungsfeld bieten, die gerade dabei sind, sich mit dem Beitragsprozess vertraut zu machen. Beispiele sind Tippfehler, schlechte Grammatik, ein kaputter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebene Prosa oder ein nicht funktionierender Code-Schnipsel.
  - Labels: `p3` (keine Sichtbarkeit, wann das Issue behoben wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich vom MDN Web Docs-Personal und Gleichgesinnten bearbeitet.

#### Hinzufügen hilfreicher Informationen

Wenn möglich, fügen Sie Informationen hinzu, die den Beitragenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu ähnlichen behobenen Issues oder Lesematerialien vorliegen. Ein gut ausgearbeiteter Plan oder Schritte sind insbesondere erforderlich bei Issues, die mit `good first issue` gekennzeichnet sind und können neuen Beitragenden schnell helfen, sich mit dem Prozess vertraut zu machen. Sie können diese Aufgabe auf 5-10 Minuten zeitlich begrenzen.

Zum Beispiel könnten Sie als Triagierer die folgenden Informationen zu dem von Ihnen triagierten Issue hinzufügen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen anderer Labels

Als nächstes setzen Sie die folgenden Labels nach Bedarf:

- `effort: small`, `effort: medium`, `effort: large`: Einige Beitragsleistende suchen gerne nach Bugs basierend auf dem benötigten Zeit- und Arbeitsaufwand zur Behebung des Bugs. Wo möglich, sollten Sie versuchen, eine Einschätzung des erforderlichen Aufwands zu geben.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung des Issues wirklich einfach ist und wenn es eine gute Übung für einen Neuling wäre, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem benötigt, der mit dem Thema vertraut oder damit beschäftigt ist. Dies ist ein beliebtes Label, und einige Beitragende nutzen es, um nach Issues in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise zu suchen.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen defekten Link zu einer externen Seite beinhaltet.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein notwendiges Dokument betrifft, das noch nicht geschrieben wurde, in der Regel, weil ein Link darauf zeigt.
- `needs content update`: Setzen Sie dieses Label, wenn die Behebung des Issues in einem anderen Repository eine gleichwertige Behebung im `mdn/content` Repository benötigt.

  > [!NOTE]
  > Nachdem der Triage-Prozess abgeschlossen ist, entfernen Sie das `needs triage` Label.
