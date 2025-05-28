---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: d64189632da72d059dcc110f4d0b0684ef45ba16
---

Als Mitwirkender können Sie [Issues melden](#richtlinien_zum_melden_eines_issues) und an [Issues arbeiten](#richtlinien_zum_arbeiten_an_einem_issue).
Nachdem Sie ein Issue gemeldet haben, wird es kategorisiert. Die [Kategorisierung](#richtlinien_zur_kategorisierung_von_issues) von Issues erfolgt in der Regel durch Personen, die die Rolle eines Maintainers oder Eigentümers innehaben.

## Allgemeine Richtlinien für die Teilnahme

Beim Melden eines Issues oder der Teilnahme an einer Diskussion in einem Issue sollten Sie stets darauf achten, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Berücksichtigen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare konstruktiv und themenbezogen sind und nicht nur Lärm verursachen.

Tun Sie Folgendes:

- Bevor Sie ein Issue eröffnen, überlegen Sie, ob Sie es eventuell mit dem Team/dem Netzwerk [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) sollten. Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und sich auf einen gemeinsamen Kurs zu einigen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Nachdem Sie ein Issue eröffnet haben, versuchen Sie, das Problem selbst zu beheben. Lesen Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu eröffnen.

Vermeiden Sie Folgendes:

- Issues zu verkomplizieren, indem Sie versuchen, mehrere Themen zu diskutieren oder Kommentare abzugeben, die nichts mit dem Thema zu tun haben.
- Viele Issues mit vagen Fragen zu eröffnen.
- Fragen zu stellen, ohne zu versuchen, das Problem zuerst selbst zu lösen.

Wenn Sie neue Dokumentationen oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, sehen Sie [Vorschläge für neuen Inhalt oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben darstellen und ein klares Ergebnis haben.

### Bevor Sie ein Issue eröffnen

Wenn Sie glauben, einen Fehler bei den Inhalten der MDN Web Docs oder im Aussehen der Website gefunden zu haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass niemand anderes das Problem bereits gemeldet hat.

### Melden eines Issues

Je nach Art des Problems, das Sie entdeckt haben, können Sie es melden, indem Sie ein Issue in einem der Haupt-[MDN GitHub-Repositories](/de/docs/MDN/Community/Our_repositories) eröffnen.
Wenn die von Ihnen bereitgestellten Informationen unvollständig sind, könnte es sein, dass Sie während des [Kategorisierungsprozesses](#prüfen_der_vollständigkeit_der_informationen_eines_issues) um weitere Details gebeten werden.

Hier sind einige Tipps zum Eröffnen von Issues:

- Wählen Sie die passende Kategorie, um das Issue zu melden. Zum Beispiel verwenden Sie die [Content-Issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Vorlage im `mdn/content` Repository, um einen Inhaltsfehler zu melden.
- Geben Sie ausreichend Informationen beim Melden des Issues an:
  - **Titel des Issues** muss die _erforderliche Aktion_ knapp vermitteln.
  - **Beschreibung des Issues** muss den Fehler sowie die erforderliche Aktion zur Behebung des Issues klar beschreiben. Es muss auch die Aufgaben oder Unteraufgaben auflisten, die zur Behebung abgeschlossen werden müssen. Weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mit Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Beschreibung des Issues anstatt Kommentare hinzuzufügen. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Issue mehrere Teile umfasst. Dies hilft anderen, die sonst durch Kommentare scrollen müssten, um den Status der verschiedenen Aufgaben zu erkennen.
    - Kommentare in einem Issue sollten auf Details oder Kontext beschränkt sein, die zur Lösung des Problems beitragen.
- Falls Sie sich in einer der folgenden Situationen befinden, verlagern Sie das Gespräch auf [MDN's Diskussionsseite auf GitHub](https://github.com/orgs/mdn/discussions):

  - Eine Diskussion muss stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach dem Öffnen des Issues.
  - Zu dem Issue gibt es keinen klaren Konsens zur Lösung.
  - Die Anforderungen für die Aufgabe erweisen sich während der Bearbeitung als komplizierter oder unklar.

- Bei kleineren Fehlern, können Sie die [Änderungen selbst vornehmen](#fehler_selbst_beheben) und einen Pull-Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen eröffnete Issue kein Fehlerbericht, sondern eine Serie von Aufgaben ist, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
Erklären Sie den Kontext oder den Grund für das Ausführen der Aufgaben in der Beschreibung.
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

## Richtlinien zum Arbeiten an einem Issue

Denken Sie daran, dass, wenn Sie sich ein Issue vornehmen, erwartet wird, dass die Arbeit zeitnah abgeschlossen wird. Wenn Sie nach einer Woche keine Fortschritte gemacht haben oder die erforderliche Aufgabe nicht mehr erfüllen können, hinterlassen Sie einen Kommentar und entziehen Sie sich dem Issue.

Dies sind die allgemeinen Schritte zum Arbeiten an einem Issue:

1. **Finden Sie ein Issue:** Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit dem Label [`good first issue`, `help wanted`](#andere_labels_festlegen) oder [`p3`](#ein_prioritätslabel_festlegen). Die meisten Repositories haben Issues mit diesen Labels. Sie können gerne stöbern und ein Issue wählen, das zu Ihren Fähigkeiten passt. Ein weiterer nützlicher Ort, um nach Issues zu suchen, an denen Sie arbeiten können, ist das [MDN-Contributors-Task-Board](https://github.com/orgs/mdn/projects/25). Diese Projektübersicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste basierend auf den Themen (`Labels` Spalte), die Sie interessieren, filtern. Sehen Sie die Beschreibung einiger der [Labels](#andere_labels_festlegen), die im Prozess der Issue-Kategorisierung angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` bedeutet, dass das MDN Web Docs Core-Team das Issue noch nicht überprüft hat, und Sie sollten noch nicht daran arbeiten.

2. **Weisen Sie das Issue sich selbst zu:** Nachdem Sie ein Issue gefunden haben, an dem Sie arbeiten möchten, stellen Sie sicher, dass das Issue niemand anderem zugewiesen ist. Fügen Sie einen Kommentar hinzu, dass Sie an dem Issue arbeiten möchten, und wenn möglich, [weisen Sie das Issue sich selbst zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Führen Sie die Recherche durch:** Die meisten Issues erfordern einige Untersuchungen, bevor mit der Arbeit begonnen werden kann.

   - Definieren Sie den Umfang der zu erledigenden Arbeiten. Falls Fragen auftauchen, stellen Sie sie in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Wenn das Issue gut beschrieben ist und die Arbeit offensichtlich ist, fahren Sie fort und erledigen Sie sie.
   - Wenn das Issue nicht gut beschrieben ist und/oder Sie nicht sicher sind, was erforderlich ist, können Sie den Poster erwähnen (@) und um weitere Informationen bitten.

4. **Nehmen Sie die Änderungen vor:** Forken und verzweigen Sie das Repository. Erstellen Sie Ihre Arbeit und öffnen Sie eine [Pull-Request](/de/docs/MDN/Community/Pull_requests) im Repository. [Referenzieren Sie das Issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in der Pull-Request-Beschreibung. Je nachdem, welche Dateien Sie in der Pull-Request aktualisiert haben, wird automatisch ein Reviewer zu Ihrer Pull-Request zugewiesen. (Die Teams nach Themenbereichen sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   Nachdem Sie die Pull-Request geöffnet haben, und feststellen, dass Sie nicht mehr die Zeit haben, Änderungen vorzunehmen oder Feedback zu überprüfen, lassen Sie das Team so schnell wie möglich in einem Kommentar in der Pull-Request wissen. Dies wird dem Team helfen, einen anderen interessierten Mitwirkenden zuzuweisen, um die Arbeit an der Pull-Request abzuschließen und das verknüpfte Issue zu schließen.

5. Nachdem Ihre Pull-Request überprüft und zusammengeführt wurde, können Sie das verknüpfte Issue als erledigt markieren. Wenn Sie die Pull-Request mit dem Ausdruck `Fixes #<issue>` eröffnet haben, wird das Issue automatisch geschlossen, wenn die Pull-Request zusammengeführt wird.

### Fehler selbst beheben

Wenn Sie einen Fehler entdecken — sei es ein Problem mit dem Erscheinungsbild der Website oder ein Fehler in der Dokumentation — können Sie versuchen, ihn selbst zu beheben. Erfahren Sie, wie Sie beitragen können, indem Sie unseren [Beitragsleitfaden](https://github.com/mdn/content/blob/main/CONTRIBUTING.md) durchgehen.

Wenn der Fehler klein ist, wie ein Tippfehler oder eine geringe Verbesserung des Satzes, oder eine unstreitige Korrektur beinhaltet, reichen Sie eine Pull-Request mit den Änderungen ein.

Bei allen anderen Arten von Fehlern beginnen Sie mit dem [Eröffnen des Issues](#richtlinien_zum_melden_eines_issues). Fügen Sie einen Kommentar hinzu, in dem Sie Ihre Absicht beschreiben, an dem Issue zu arbeiten, und, wenn möglich, Ihre vorgeschlagene Lösung oder Schritte zur Behebung des Problems beschreiben.
Warten Sie, bis das Issue kategorisiert wird, damit das MDN Web Docs-Team überprüfen kann, dass das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt wird.

> [!NOTE]
> Wenn Sie eine Pull-Request eröffnen, bevor das Issue kategorisiert wurde, könnte Ihre Zeit und Mühe verschwendet werden, wenn das verknüpfte Issue als ungültig angesehen wird oder die Lösung nicht der von dem MDN Web Docs-Team erwarteten entspricht.
> Nachdem das Issue kategorisiert wurde, weisen Sie es sich selbst zu.

Verwenden Sie die [Richtlinien zum Arbeiten an einem Issue](#richtlinien_zum_arbeiten_an_einem_issue), um das Problem zu beheben, indem Sie die entsprechende Quelle aktualisieren, wie zum Beispiel:

- Der **Inhalt** der MDN Web Docs (in Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Der **übersetzte Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, die Ihnen helfen, wie Sie beitragen können.
Weitere Informationen finden Sie in unseren [Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien zur Kategorisierung von Issues

Wenn Sie ein Maintainer oder Besitzer in der MDN Web Docs GitHub-Organisation sind, sind Sie für die Kategorisierung von Issues in einem oder mehreren MDN Web Docs-Repositories verantwortlich.

Der allgemeine Prozess zur Kategorisierung umfasst einige [allgemeine](#allgemeine_kategorisierungsaufgaben) und einige [spezifische Aufgaben für Issues](#spezifische_kategorisierungsaufgaben_für_issues).

### Allgemeine Kategorisierungsaufgaben

- Wenn ein Issue eröffnet wird, wird das Label `needs triage` automatisch auf das Issue gesetzt. Sie können nach diesem Label suchen, um nach Issues zu suchen, die [kategorisiert werden müssen](#spezifische_kategorisierungsaufgaben_für_issues). Beiträge oder jemand anderes sollten an dem Issue nicht arbeiten, bis es kategorisiert wurde. (Kategorisierer sollten daran denken, das Label `needs triage` zu entfernen, nachdem das Issue kategorisiert wurde.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird zusätzlich ein `Content:` Label, wie `Content:CSS` oder `Content:WebAPI`, automatisch auf das Issue gesetzt. Dies basiert auf der in dem Issue erwähnten MDN-URL. Sie können das themenspezifische Label verwenden, um nach Issues zu suchen, die in Ihrem spezifischen Themenbereich kategorisiert werden müssen.

- Wenn ein Issue ein aktives, nicht-en-US Gebiet betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Gebiete werden diese Issues aufnehmen und kategorisieren.

- Sie müssen nicht jederzeit aktiv Issues kategorisieren. Reservieren Sie Zeit, sagen wir 30 Minuten pro Woche, um regelmäßig in Ihrem Verantwortungsbereich Issues zu kategorisieren. Das Kategorisieren muss nicht als Teil eines synchronen Treffens oder sogar zur gleichen Zeit wie jeder andere gemacht werden, aber es sollte regelmäßig getan werden, um sicherzustellen, dass der Rückstand an nicht kategorisierten Fehlern nicht zu groß wird.

- Abgesehen von der wöchentlichen Kategorisierung eingehender Issues sollten Sie die Liste der alten Fehler überprüfen, um zu sehen, ob es welche gibt, die blockiert sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Issues, die weiterhin offen sind, um zu sehen, ob der zugewiesene Benutzer Fortschritte macht. Wenn nach einer Woche keine Fortschritte erzielt werden, fragen Sie, ob sie noch Zeit haben, an dem Issue zu arbeiten. Wenn eine weitere Woche ohne Fortschritt vergeht, entziehen Sie ihnen die Zuweisung und hinterlassen Sie einen Kommentar, der besagt, dass Sie das Issue für andere interessierte Mitwirkende verfügbar machen.
  - Wenn eine Pull-Request zur Behebung des Issues geöffnet wurde, aber nicht innerhalb einer Woche überprüft wurde, geben Sie dem Reviewer einen sanften Anstoß, um zu fragen, ob sie es schaffen können, es zu überprüfen.
  - Wenn eine Pull-Request zur Behebung des Issues auf Überprüfungskommentare wartet, um nach einer Woche bearbeitet zu werden, fragen Sie den Autor, ob er auf seine Überprüfung reagieren kann. Wenn eine weitere Woche vergeht, beheben Sie entweder die Überprüfungskommentare selbst, wenn Sie Zeit haben, oder schließen Sie die Pull-Request und entziehen Sie die Zuweisung des zugehörigen Issues.

### Spezifische Kategorisierungsaufgaben für Issues

Dies sind die Richtlinien, denen Sie beim Kategorisieren jedes Issues folgen sollten.

#### Überprüfen, ob das Issue gültig ist

Dies sind einige Punkte, die Sie bei der Überprüfung der Gültigkeit eines Issues beachten sollten:

- Stellen Sie sicher, ob das gemeldete Issue gültig ist und die Korrektur den Inhalt für die Leser und die Website verbessert.
- Evaluieren Sie, ob die Auswirkungen der Korrektur klein oder site-weit sein werden.
- Evaluieren Sie, ob zur Behebung des Issues zunächst eine Diskussion erforderlich ist, und weisen Sie in diesem Fall den Autor darauf hin, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Stellen Sie sicher, ob das Issue unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht.
- Prüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfen der Vollständigkeit der Informationen eines Issues

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Bearbeitung beginnen kann:

- URL der MDN Web Docs-Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten vorhanden ist
- Die spezielle Überschrift oder Abschnitt auf der MDN-Web-Docs-Seite, auf der das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unbrauchbaren, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details zu liefern, und das Label `needs info` auf das Issue setzen. Setzen Sie die Kategorisierung des Issues erst fort, nachdem diese Details geliefert wurden (danach können Sie das `needs info` Label entfernen). Es ist in Ordnung, bis zu eine Woche auf eine Antwort des Autors zu warten.

#### Ein Prioritätslabel festlegen

Für jeden Fehler setzen Sie ein Prioritätslabel basierend auf der Schwere des Issues, um Personen zu helfen, die an den wichtigsten Problemen oder Bereichen arbeiten möchten.

- Kritisches Issue: Dieser Typ von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo er auf der Website erscheint. Dieser Typ von Issue könnte MDNs Ruf erheblich schädigen und/oder Benutzern schaden. Beispiele für diesen Problemtyp sind ein fehlerhaftes Codebeispiel, das bei Verwendung im Produktionsbetrieb ein schwerwiegendes Sicherheitsproblem darstellen könnte, und unangebrachter Inhalt wie Malware, Obszönitäten, Pornografie, Hassreden oder Links zu solchem Inhalt.

  - Label: `p0` (wird sofort bearbeitet)

- Wesentliches Problem: Dieser Typ von Problem könnte die Nützlichkeit einer Seite erheblich beeinträchtigen. Zum Beispiel eine signifikante Menge veralteter Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine bedeutende Menge schlecht geschriebener und schwer verständlicher Prosa oder eine große Anzahl defekter Links.

  - Labels: `p1` (wird bald bearbeitet) und `p2` (wird bald bearbeitet, aber vorrangige Probleme haben Vorrang)

- Kleines Issue: Dies ist eine Art von Verbesserungsproblem, das den vorhandenen Inhalt besser machen kann, jedoch keine Auswirkungen auf das Lernen hat, oder nur eine geringe Auswirkung auf das Lernen hat. Da diese Arten von Problemen nicht aktiv geplant werden, sind Hilfen von Mitwirkenden, die diese Probleme lösen, willkommen und sehr geschätzt. Das Beheben einiger dieser Issues kann auch Anfängern, die sich mit dem Prozess der Beitragsleistung vertraut machen, die notwendige Übung geben. Beispiele umfassen Tippfehler, schlechte Grammatik, einen kaputten Link, eine kleine Menge veralteter Informationen oder schlecht geschriebener Prosa oder ein Code-Snippet, das nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Problem behandelt wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich von MDN Web Docs-Mitarbeitern und -Kollegen bearbeitet.

#### Hilfreiche Informationen hinzufügen

Wenn möglich, fügen Sie Informationen hinzu, die Mitwirkende bei der Behebung des Problems unterstützen. Die Informationen können in Form von Schritten, allgemeinen Ansätzen, Links zu anderen ähnlichen gelösten Problemen oder Informationsquellen vorliegen. Ein gut ausgearbeiteter Plan oder Schritte sind besonders bei Problemen mit dem Label `good first issue` erforderlich und können neuen Mitwirkenden schnell den Einstieg erleichtern. Diese Aufgabe können Sie zeitlich auf 5-10 Minuten begrenzen.

Zum Beispiel, als Kategorisierer, können Sie die folgenden Informationen zu dem von Ihnen kategorisierten Issue hinzufügen:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Andere Labels festlegen

Setzen Sie anschließend die folgenden Labels, soweit zutreffend:

- `effort: small`, `effort: medium`, `effort: large`: Einige Mitwirkende durchsuchen nach Fehlern basierend auf der Zeit und dem Aufwand, die erforderlich sind, um den Fehler zu beheben. Wo möglich, sollten Sie versuchen, eine Schätzung des erforderlichen Aufwandes bereitzustellen.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung wirklich einfach ist und das Beheben des Problems eine gute Übung für einen Neueinsteiger darstellen würde, der mit dem Prozess vertraut wird.
- `help wanted`: Setzen Sie dieses Label, wenn die Behebung des Problems Hilfe von jemandem erfordert, der sich mit dem Thema auskennt. Dies ist ein beliebtes Label und einige Mitwirkende verwenden es, um nach Problemen in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise zu suchen.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen defekten Link zu einer externen Seite betrifft.
- `document not written`: Setzen Sie dieses Label, wenn das Problem ein erforderliches Dokument betrifft, das noch nicht geschrieben wurde, üblicherweise weil ein Link darauf zeigt.
- `needs content update`: Setzen Sie dieses Label, wenn die Behebung des Problems in einem anderen Repository eine entsprechende Behebung im `mdn/content` Repository erfordert.

  > [!NOTE]
  > Nach Abschluss des Kategorisierungsprozesses entfernen Sie das Label `needs triage`.
