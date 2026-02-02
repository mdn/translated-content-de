---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 912a46f223ac76dca0ea29fab6aa0ba1e5e80216
---

Als Beitragende(r) können Sie [Berichte](#richtlinien_zum_melden_eines_issues) erstellen und an [Issues arbeiten](#richtlinien_für_die_bearbeitung_eines_issues).
Nachdem Sie ein Issue gemeldet haben, wird das Issue triagiert. Die [Triagierung](#richtlinien_zur_triagierung_von_issues) von Issues wird typischerweise von Personen mit der Rolle eines Pflegers oder Eigentümers durchgeführt.

## Allgemeine Richtlinien zur Teilnahme

Wenn Sie ein Issue melden oder sich an einem Gespräch in einem Issue beteiligen, stellen Sie sicher, dass Ihre Beiträge zum Fortschritt des Projekts beitragen. Überlegen Sie, ob die Issues, die Sie eröffnen, und Ihre Kommentare in einem Issue konstruktiv und thematisch relevant sind und nicht nur Lärm erzeugen.

Tun Sie Folgendes:

- Wenn Sie eine Frage haben, können Sie diese in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) stellen, anstatt ein Issue zu erstellen.
- Wenn es mehrere Möglichkeiten gibt, ein Problem zu lösen, ziehen Sie in Betracht, ob Sie es mit dem Personal/der Gemeinschaft [diskutieren](/de/docs/MDN/Community/Communication_channels#chat_rooms) sollten.
  Nutzen Sie Diskussionen, um verschiedene Standpunkte zu gewinnen und auf einen abgestimmten Kurs zu kommen. Dies hilft, Issues fokussiert und produktiv zu halten.
- Nachdem Sie ein Issue eingereicht haben, versuchen Sie das Problem selbst zu beheben. Es gibt einen Leitfaden zur [Einreichung und Überprüfung von Pull-Requests](/de/docs/MDN/Community/Pull_requests), der alles abdeckt, was Sie über den Beitragsprozess wissen müssen.

Vermeiden Sie Folgendes:

- Issues komplizieren, indem Sie versuchen, mehrere Themen zu diskutieren oder off-topic Kommentare abzugeben.
- Viele Issues mit vagen Fragen eröffnen.
- Fragen stellen, ohne vorher versucht zu haben, das Problem selbst zu lösen.

Wenn Sie neue Dokumentation oder Möglichkeiten zur Verbesserung der Website vorschlagen möchten, siehe [Vorschläge für neue Inhalte oder Funktionen](/de/docs/MDN/Community/Issues/Content_suggestions_feature_proposals).

## Richtlinien zum Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) werden verwendet, um Fehler zu verfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung verwandter umsetzbarer Aufgaben sein und muss ein klares Ergebnis haben.

### Bevor Sie ein Issue einreichen

Wenn Sie denken, dass Sie einen Fehler im Inhalt von MDN Web Docs oder im Look-and-Feel der Website gefunden haben, durchsuchen Sie die aktuellen offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories) und stellen Sie sicher, dass niemand sonst das Problem bereits gemeldet hat.

### Ein Issue melden

Je nach Art des von Ihnen entdeckten Problems können Sie es melden, indem Sie ein Issue in einem der Haupt-[MDN GitHub Repositories](/de/docs/MDN/Community/Our_repositories) einreichen.
Wenn die von Ihnen bereitgestellten Informationen im Issue unvollständig sind, könnten Sie gebeten werden, während des [Triagierungsprozesses](#überprüfung_des_issues_auf_vollständigkeit_der_informationen) mehr Details bereitzustellen.

Hier sind einige Hinweise zum Eröffnen von Issues:

- Wählen Sie die passende Kategorie, um das Issue zu melden. Um beispielsweise einen Inhaltsfehler zu melden, verwenden Sie die [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) Vorlage im `mdn/content` Repository.
- Stellen Sie beim Melden des Issues ausreichende Informationen bereit:
  - Der **Titel des Issues** muss die _erforderliche Aktion_ kurz und prägnant vermitteln.
  - Die **Beschreibung des Issues** muss eindeutig den Fehler und die erforderliche Aktion zur Behebung des Issues beschreiben. Sie muss auch die auszuführenden Aufgaben oder Unteraufgaben zur Behebung des Issues auflisten. Einige weitere Richtlinien umfassen:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzugeben.
    - Aktualisieren Sie den Status einer Aufgabe in der Issues-Beschreibung anstatt im Issue zu kommentieren. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, die sonst durch die Kommentare im Issue scrollen müssten, um den Status der verschiedenen Aufgaben zu bestimmen.
    - Kommentare in einem Issue sollten auf Details oder Kontexte beschränkt sein, die bei der Lösung des Issues helfen.
- Wenn Sie sich in einer der folgenden Situationen befinden, verschieben Sie die Unterhaltung in [MDN's Diskussion auf GitHub](https://github.com/orgs/mdn/discussions):
  - Eine Diskussion muss stattfinden, um ein Issue zu klären.
  - Eine Diskussion beginnt nach Eröffnung des Issues.
  - Das Issue hat keinen klaren Konsens über seine Lösung.
  - Die Anforderungen zur Ausführung der Aufgabe erweitern sich, während sie gelöst wird oder die Arbeit unklar ist.
- Bei kleineren Fehlern können Sie [die Änderungen selbst vornehmen](#behebung_von_issues_selbst) und einen Pull-Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen eröffnete Issue nicht dazu dient, einen Fehler zu melden, sondern um eine Reihe von Aufgaben auszuführen, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-tasklists) erstellen.
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

- [x] [accent-color](/en-US/docs/Web/CSS/Reference/Properties/accent-color) - checked, okay
- [ ] [backdrop-filter](/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter)
- [ ] [letter-spacing](/en-US/docs/Web/CSS/Reference/Properties/letter-spacing) - open pull request to move `Accessibility concerns` and `Internationalization concerns` sections before the `Specifications` section.
```

## Richtlinien für die Bearbeitung eines Issues

Denken Sie daran, dass die Erwartung besteht, dass die Arbeit rechtzeitig abgeschlossen wird, wenn Sie ein Issue übernehmen.
Wenn Sie nicht in der Lage sind, die Arbeit an einem beanspruchten Issue voranzutreiben, fügen Sie bitte einen Kommentar hinzu, damit die Verantwortlichen informiert sind und das Issue von einem anderen Beitragenden übernommen werden kann.

Dies sind die allgemeinen Schritte zur Bearbeitung eines Issues:

1. **Ein Issue finden:**

   Wenn Sie einen Beitrag leisten möchten, suchen Sie nach Issues mit einem [`good first issue`, `help wanted`](#setzen_anderer_labels) oder [`p3`](#zuweisung_eines_prioritätslabels) Label. Die meisten Repositories haben Issues mit diesen Labels. Sie sind herzlich eingeladen, durchzusehen und ein Issue auszuwählen, das zu Ihrem Fähigkeitsniveau passt. Eine weitere nützliche Stelle, um nach Issues zu suchen, ist das [MDN Contributor Board](https://github.com/orgs/mdn/projects/25). Diese Projektansicht listet offene Issues aus mehreren Repositories auf. Sie können die Liste nach den Themen (`Labels` Spalte) filtern, die Sie interessieren. Siehe die Beschreibung einiger der [Labels](#setzen_anderer_labels), die während des Issues-Triageprozesses angewendet werden.

   > [!NOTE]
   > Ein Issue mit dem `needs triage` Label zeigt an, dass das MDN Web Docs Kernteam das Issue noch nicht überprüft hat und Sie nicht daran arbeiten sollten.

2. **Prüfen, dass niemand anderes bereits an dem Issue arbeitet:**

   Bevor Sie mit der Arbeit an einem Issue beginnen, überprüfen Sie, dass niemand für das Issue zugewiesen ist (das Feld _Assignees_ sollte "Unassigned" sein).

   Überprüfen Sie dann, dass keine verknüpften [Pull-Requests](/de/docs/MDN/Community/Pull_requests) vorhanden sind, da diese darauf hinweisen könnten, dass ein anderer Beitragender das Issue beansprucht und daran zu arbeiten begonnen hat.

3. **Recherche durchführen:**

   Die meisten Issues erfordern einige Nachforschungen, bevor die Arbeit beginnen kann.
   - Den Arbeitsumfang ermitteln, der getan werden muss.
     Wenn das Issue nicht gut beschrieben ist und/oder Sie sich nicht sicher sind, was benötigt wird, können Sie die Person, die das Issue eröffnet hat, erwähnen (mit @Benutzername) und um mehr klärende Informationen bitten.
   - Sie können auch um Rat in den [MDN Web Docs Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) fragen.

4. **Das Issue beanspruchen:**

   Sie können ein nicht zugewiesenes und nicht beanspruchtes Issue durch folgende Schritte "beanspruchen":
   1. Forken Sie das Repository und erstellen Sie Ihren Arbeitszweig.
   2. Beheben Sie das Issue und öffnen Sie dann einen [Pull-Request (PR)](/de/docs/MDN/Community/Pull_requests) im Repository.
   3. Fügen Sie in der PR-Beschreibung den Text `Fixes #<issue_number>` ein (wenn der PR das Issue nur teilweise behebt, fügen Sie den Text `Related to #<issue_number>` hinzu).

      Das Hinzufügen dieses Textes ist das, was eine Querverbindung zwischen dem Issue und der PR erstellt und das Issue implizit als von Ihnen beansprucht markiert.

      > [!NOTE]
      > Wenn Sie über die erforderlichen Berechtigungen verfügen, sollten Sie das Issue auch _explizit_ [sich selbst zuweisen](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

   Abhängig von den Dateien, die Sie im Pull-Request aktualisiert haben, wird automatisch ein Prüfer zu Ihrem Pull-Request zugewiesen. (Teams pro Themenbereich sind in der [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) Datei definiert).

   > [!WARNING]
   > Wenn Sie nach dem Öffnen des Pull-Requests feststellen, dass Sie keine Zeit mehr haben, Änderungen vorzunehmen oder Feedback von der Überprüfung zu integrieren, informieren Sie das Team so schnell wie möglich in einem Kommentar im Pull-Request.
   > Dies wird dem Team helfen, einen weiteren interessierten Beitragenden zuzuweisen, um die Arbeit am Pull-Request abzuschließen und das verknüpfte Issue zu schließen.

5. **Das Issue als abgeschlossen schließen:**

   Wenn Sie den Pull-Request mit `Fixes #<issue>` in der Beschreibung geöffnet haben, wird das Issue automatisch geschlossen, wenn der PR gemerged wird. Andernfalls können Sie einen Kommentar zu dem Issue hinzufügen, der auf einen oder mehrere Pull-Requests verweist, die es beheben, und ein Pfleger wird das Issue als abgeschlossen schließen.

### Behebung von Issues selbst

Wenn Sie einen Fehler bemerken — sei es ein Problem mit dem Look-and-Feel der Website oder ein Fehler in der Dokumentation — können Sie versuchen, ihn selbst in einem [Pull-Request](/de/docs/MDN/Community/Pull_requests) zu beheben.
Wenn der Fehler klein ist (wie ein Tippfehler oder eine kleine Verbesserung eines Satzes) oder eine schnelle Lösung beinhaltet, können Sie einen Pull-Request mit den entsprechenden Änderungen einreichen.

Bei allen anderen Arten von Fehlern beginnen Sie damit, [ein Issue zu eröffnen](#richtlinien_zum_melden_eines_issues).
Fügen Sie einen Kommentar über Ihre Absicht, am Issue zu arbeiten, hinzu und beschreiben Sie, wenn möglich, Ihre vorgeschlagene Lösung oder Schritte zur Behebung.

> [!NOTE]
> Ihre Zeit und Mühe könnten verschwendet sein, wenn Sie einen Pull-Request ohne ein Issue zu eröffnen einreichen.
> Warten Sie, bis das Issue triagiert wurde, damit das MDN Web Docs-Team überprüfen kann, ob das Issue legitim ist und Ihre vorgeschlagene Lösung genehmigt.

Versuchen Sie, mithilfe der [Richtlinien zur Bearbeitung eines Issues](#richtlinien_für_die_bearbeitung_eines_issues), das Problem durch Aktualisierung der entsprechenden Quelle zu beheben, wie zum Beispiel:

- Der **Inhalt** der MDN Web Docs (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- Der **übersetzte Inhalt** der MDN Web Docs im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- Das **Frontend** der MDN Web Docs im [mdn/fred](https://github.com/mdn/fred) Repository

Jedes Repository enthält nützliche Informationen, um Sie bei Ihrem Beitrag zu unterstützen.
Für weitere Informationen siehe [unsere Haupt-GitHub-Repositories](/de/docs/MDN/Community/Our_repositories).

## Richtlinien zur Triagierung von Issues

Wenn Sie ein Pfleger oder Eigentümer in der GitHub-Organisation der MDN Web Docs sind, sind Sie verantwortlich für die Triagierung von Issues in einem oder mehreren MDN Web Docs Repositories.

Der allgemeine Prozess für die Triagierung umfasst einige [allgemeine](#allgemeine_triagierungsaufgaben) und einige [issue-spezifische Aufgaben](#issue-spezifische_triagierungsaufgaben).

### Allgemeine Triagierungsaufgaben

- Wenn ein Issue eröffnet wird, wird das Label `needs triage` automatisch auf das Issue gesetzt. Sie können dieses Label durchsuchen, um nach Issues zu suchen, die [triagiert werden müssen](#issue-spezifische_triagierungsaufgaben). Beitragende oder andere Personen sollten nicht an dem Issue arbeiten, bis es triagiert wurde. (Triagierer sollten daran denken, das Label `needs triage` nach der Triagierung des Issues zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird ein zusätzliches `Content:` Label gesetzt, wie `Content:CSS` oder `Content:WebAPI`, das automatisch auf das Issue gesetzt wird. Dies wird basierend auf der im Issue erwähnten MDN-URL gesetzt. Sie können das Inhalts-spezifische Label verwenden, um nach triagierbaren Issues in Ihrem spezifischen Themenbereich zu suchen.

- Wenn ein Issue eine aktive Nicht-en-US-Lokale betrifft, setzen Sie das entsprechende Label, wie `l10n-fr`, `l10n-zh` oder `l10n-ja`. Die Teams für diese Lokalen werden diese Issues aufnehmen und triagieren.

- Sie müssen nicht die ganze Zeit aktiv Issues triagieren. Reservieren Sie sich Zeit, sagen wir 30 Minuten pro Woche, um regelmäßig Issues in Ihrem Verantwortungsbereich zu triagieren. Die Triagierung muss nicht als Teil eines synchronen Meetings oder sogar zur gleichen Zeit wie alle anderen durchgeführt werden, aber sie sollte regelmäßig erfolgen, um sicherzustellen, dass die Rückstände von nicht triagierten Bugs nicht zu hoch werden.

- Abgesehen von der wöchentlichen Triagierung eingehender Issues, überprüfen Sie die Liste der alten Bugs, um zu sehen, ob es welche gibt, die ins Stocken geraten sind, geschlossen werden müssen oder nicht mehr relevant sind. Das `idle` Label wird automatisch auf Issues gesetzt, die 30 Tage lang keine Aktivität hatten.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, um zu sehen, ob der/die Zuweisende Fortschritte macht. Wenn nach einer Woche der Zuweisung kein Fortschritt zu verzeichnen ist, fragen Sie nach, ob sie noch Zeit haben, an dem Issue zu arbeiten. Wenn eine weitere Woche ohne Fortschritt vergeht, heben Sie die Zuweisung auf und hinterlassen Sie einen Kommentar, der angibt, dass Sie das Issue anderen interessierten Beitragenden zur Verfügung stellen.
  - Wenn ein Pull-Request zur Behebung des Issues erstellt wurde, aber nach einer Woche nicht überprüft wurde, geben Sie dem Prüfer einen sanften Hinweis, ob er es überprüfen kann.
  - Wenn ein Pull-Request zur Behebung des Issues auf Überprüfungskommentare wartet, die nach einer Woche noch nicht adressiert wurden, dann fragen Sie den Autor, ob er auf seine Überprüfung antworten kann. Wenn eine weitere Woche vergeht, beheben Sie entweder die Überprüfungskommentare selbst, falls Sie Zeit haben, oder schließen Sie den Pull-Request und heben Sie die zugehörige Issue-Zuweisung auf.

### Issue-spezifische Triagierungsaufgaben

Dies sind die Richtlinien, denen Sie bei der Triagierung jedes Issues folgen sollten.

#### Überprüfung, ob das Issue gültig ist

Dies sind einige der Dinge, die Sie im Auge behalten müssen, während Sie die Gültigkeit eines Issues überprüfen:

- Überprüfen Sie, ob das aufgeworfene Issue gültig ist und ob die Behebung den Inhalt für die Leser und die Website verbessern wird.
- Bewerten Sie, ob die Auswirkung der Behebung klein oder website-weit sein wird.
- Bewerten Sie, ob die Behebung des Issues zuerst eine Diskussion benötigt, in diesem Fall verweisen Sie den Autor darauf, eine [Diskussion](https://github.com/orgs/mdn/discussions) zu eröffnen.
- Überprüfen Sie, ob das Issue mit unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) übereinstimmt.
- Überprüfen Sie, ob Vorschläge zum Hinzufügen von Links mit unserer [Richtlinie für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung des Issues auf Vollständigkeit der Informationen

Überprüfen Sie jedes Issue anhand der folgenden Checkliste, um sicherzustellen, dass das Issue die beschriebenen Informationen enthält, damit jemand mit der Bearbeitung des Bugs beginnen kann:

- URL der MDN Web Docs Seite mit dem Problem oder URL einer Beispiel-MDN-Web-Docs-Seite, wenn das Problem auf mehreren Seiten besteht
- Die spezifische Überschrift oder der Abschnitt auf der MDN-Web-Docs-Seite, wo das Problem gefunden wurde
- Eine klare Beschreibung der falschen, unzureichenden, unvollständigen oder fehlenden Informationen

Wenn eine der oben genannten Informationen nicht vorhanden ist, sollten Sie den Autor des Issues bitten, diese Details bereitzustellen, und das Label `needs info` auf das Issue setzen. Setzen Sie die Triagierung des Issues erst fort, nachdem diese Details bereitgestellt wurden (danach können Sie das Label `needs info` entfernen). Es ist in Ordnung, bis zu einer Woche auf eine Antwort des Autors zu warten.

#### Zuweisung eines Prioritätslabels

Setzen Sie für jeden Bug ein Prioritätslabel basierend auf der Schwere des Issues, um Personen zu helfen, die an den wichtigsten Issues oder Bereichen arbeiten möchten.

- Kritisches Issue: Diese Art von Issue muss so schnell wie möglich behoben werden, unabhängig davon, wo es auf der Seite erscheint. Diese Art von Issue könnte den Ruf von MDN schwer beschädigen und/oder Benutzer schädigen. Beispiele für dieses Issue sind ein falsches Codebeispiel, das, wenn es in der Produktion verwendet wird, ein schwerwiegendes Sicherheitsproblem und unerwünschte Inhalte wie Malware, Obszönität, Pornografie, Hassreden oder Links zu solchen Inhalten erstellen könnte.
  - Label: `p0` (wird sofort adressiert)

- Großes Issue: Diese Art von Issue könnte die Nützlichkeit einer Seite erheblich beeinträchtigen. Zum Beispiel eine signifikante Menge an veralteten Informationen, ein komplexes und wichtiges Codebeispiel, das nicht funktioniert, eine erhebliche Menge an schwer verständlichem und schlecht geschriebenem Text oder eine große Anzahl von defekten Links.
  - Labels: `p1` (wird bald adressiert) und `p2` (wird bald adressiert, aber höher priorisierte Elemente haben Vorrang)

- Kleines Issue: Dies ist eine Art von Verbesserungs-Issue, das den bestehenden Inhalt verbessern kann, aber das Lernen nicht beeinträchtigt oder nur einen geringen Einfluss auf das Lernen hat. Da diese Art von Issues nicht aktiv geplant sind, ist Hilfe von Beitragenden zur Behebung dieser Issues willkommen und sehr geschätzt. Die Behebung einiger dieser Issues kann auch den notwendigen Übungsbedarf für Anfänger bereitstellen, die dabei sind, sich mit dem Beitragsprozess vertraut zu machen. Beispiele sind Tippfehler, schlechte Grammatik, ein defekter Link, eine kleine Menge veralteter Informationen oder schlecht geschriebener Text oder ein Codebeispiel, das nicht funktioniert.
  - Labels: `p3` (keine Sichtbarkeit, wann das Issue adressiert wird)

Im Allgemeinen sollten kritische Issues sofort behoben werden und werden höchstwahrscheinlich vom MDN Web Docs-Personal und -Kollegen behandelt.

#### Hinzufügen hilfreicher Informationen

Falls möglich, fügen Sie Informationen hinzu, die den Beitragenden helfen können, das Issue zu beheben. Die Informationen können in Form von Schritten, allgemeinem Ansatz, Links zu anderen ähnlichen behobenen Issues oder Lesematerialien vorliegen. Ein gut ausgelegter Plan oder Schritte sind insbesondere bei den Issues erforderlich, die das Label `good first issue` tragen, und können neuen Beitragenden helfen, sich schnell einzuarbeiten. Sie können diese Aufgabe auf 5-10 Minuten begrenzen.

Zum Beispiel können Sie als Triagierer die folgenden Informationen zum Issue hinzufügen, das Sie triagieren:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Setzen anderer Labels

Als Nächstes setzen Sie die folgenden Labels entsprechend:

- `effort: small`, `effort: medium`, `effort: large`: Einige Beitragende mögen es nach Bugs zu suchen, basierend auf dem Zeitaufwand und der Anstrengung, die notwendig sind, um den Bug zu beheben. Wo möglich, sollten Sie versuchen, eine Einschätzung des benötigten Aufwands zu geben.
- `good first issue`: Setzen Sie dieses Label auf das Issue, wenn die Behebung des Issues wirklich einfach ist und wenn die Behebung des Issues eine gute Übungsgelegenheit für einen Neuling darstellt, der sich mit dem Prozess vertraut macht.
- `help wanted`: Setzen Sie dieses Label, wenn das Issue Hilfe von jemandem erfordert, der das Thema kennt oder damit vertraut ist. Dies ist ein beliebtes Label und einige Beitragende verwenden es, um nach Issues zu suchen, an denen sie in Open-Source-Projekten in ihren Bereichen der Vertrautheit oder Expertise arbeiten können.
- `broken link external`: Setzen Sie dieses Label, wenn das Issue einen defekten Link zu einer externen Seite betrifft.
- `document not written`: Setzen Sie dieses Label, wenn das Issue ein benötigtes Dokument betrifft, das noch nicht geschrieben wurde, normalerweise, weil ein Link darauf verweist.
- `needs content update`: Setzen Sie dieses Label, wenn die Issue-Fix in einem anderen Repository eine entsprechende Behebung im `mdn/content` Repository erfordert.

  > [!NOTE]
  > Nach Abschluss des Triagierungsprozesses das Label `needs triage` entfernen.
