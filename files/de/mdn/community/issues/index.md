---
title: Erstellen und Bearbeiten von Issues
slug: MDN/Community/Issues
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Als Beitragende können Sie [Issues melden](#richtlinien_für_das_melden_eines_issues) und [daran arbeiten](#richtlinien_für_die_bearbeitung_eines_issues).
Nachdem Sie ein Issue erstellt haben, wird dieses triagiert. Die [Triagierung von Issues](#richtlinien_für_die_triagierung_von_issues) wird typischerweise von Personen durchgeführt, die als Maintainer oder Eigentümer benannt sind.

## Allgemeine Richtlinien für Mitwirkung

Beim Melden eines Issues oder der Teilnahme an einer Diskussion in einem Issue sollten Sie stets darauf achten, dass Ihr Beitrag zum Fortschritt des Projekts beiträgt. Überlegen Sie, ob die von Ihnen eröffneten Issues und Ihre Kommentare konstruktiv und relevant sind und nicht nur für zusätzliche Unübersichtlichkeit sorgen.

Folgendes sollten Sie tun:

- Bevor Sie ein Issue einreichen, überlegen Sie, ob Sie dies [mit den Mitarbeitern/Gemeinschaft besprechen](/de/docs/MDN/Community/Communication_channels#chat_rooms) möchten. Diskussionen können helfen, unterschiedliche Standpunkte zu sammeln und sich auf eine Vorgehensweise zu einigen. Dadurch bleiben Issues fokussiert und produktiv.
- Versuchen Sie nach dem Melden eines Issues, das Problem selbst zu beheben. Lesen Sie hierzu unseren [Leitfaden zur Beitragseinreichung](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um mehr zu erfahren.
- Wenn Sie eine Frage haben, stellen Sie diese in den [MDN Web Docs Chats](/de/docs/MDN/Community/Communication_channels#chat_rooms) anstatt ein Issue zu eröffnen.

Folgendes sollten Sie vermeiden:

- Issues durch Diskussion mehrerer Themen zu verkomplizieren oder abseits des Themas zu kommentieren.
- Viele Issues zu eröffnen, die vage Fragen enthalten.
- Fragen zu stellen, ohne vorher versucht zu haben, das Problem selbst zu lösen.

## Richtlinien für das Melden eines Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues) werden verwendet, um Fehler nachzuverfolgen. Ein Issue muss eine einzelne umsetzbare Aufgabe oder eine Sammlung zusammenhängender Aufgaben umfassen und sollte ein klares Ergebnis haben.

### Bevor Sie ein Issue einreichen

Wenn Sie glauben, einen Fehler in den Inhalten der MDN Web Docs oder im Design der Website gefunden zu haben, durchsuchen Sie die offenen Issues im [relevanten Repository](/de/docs/MDN/Community/Our_repositories), um sicherzustellen, dass niemand das Problem bereits gemeldet hat.

### Einreichen eines Issues

Je nach Art des entdeckten Problems können Sie es melden, indem Sie ein Issue in einem der Haupt-[MDN GitHub Repositories](MDN/Community/Our_repositories) einreichen. Wenn die von Ihnen bereitgestellten Informationen unvollständig sind, könnten Sie während des [Triagierungsprozesses](#überprüfung_auf_vollständigkeit_der_informationen) um weitere Details gebeten werden.

Hier einige Hinweise zum Erstellen von Issues:

- Wählen Sie die passende Kategorie für das Issue. Zum Beispiel können Sie Fehler in Inhalten über die Vorlage [Content issue](https://github.com/mdn/content/issues/new?assignees=&labels=needs+triage&template=content-bug.yml) im Repository `mdn/content` melden.
- Stellen Sie ausreichende Informationen bereit:
  - **Titel des Issues** sollte prägnant die _erforderliche Aktion_ ausdrücken.
  - **Beschreibung des Issues** sollte das Problem und die erforderliche Aktion zur Behebung deutlich beschreiben. Außerdem sollte sie die Aufgaben oder Unteraufgaben auflisten, die zur Lösung erforderlich sind. Zusätzliche Richtlinien:
    - Verwenden Sie das Beschreibungsfeld, um den Status der Aufgabe oder Unteraufgaben mithilfe von Checklisten anzuzeigen.
    - Aktualisieren Sie den Status einer Aufgabe in der Beschreibung des Issues anstatt in Kommentaren. Verwenden Sie [Aufgabenlisten](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) in der Beschreibung, wenn ein Issue mehrere Teile hat. Dies hilft anderen, die den Status nicht durch Kommentare verfolgen möchten.
    - Kommentare in einem Issue sollten auf Details oder Kontexte begrenzt sein, die zur Lösung des Problems beitragen.
- Zieht eine der folgenden Situationen ein, verlagern Sie die Diskussion zu [MDNs Diskussionen auf GitHub](https://github.com/orgs/mdn/discussions):
  - Es muss eine Klärung für das Issue besprochen werden.
  - Eine Diskussion beginnt nach Öffnen des Issues.
  - Das Issue hat keinen klaren Konsens bezüglich der Lösung.
  - Die Anforderungen zur Erledigung des Problems erweitern sich während der Bearbeitung oder die Arbeit bleibt unklar.
- Bei kleineren Problemen können Sie [die Änderungen selbst vornehmen](#probleme_selbst_lösen) und einen Pull Request einreichen.

### Erstellen eines Aufgabenlisten-Issues

Wenn das von Ihnen eröffnete Issue keine Fehleranzeige, sondern eine Liste von Aufgaben betrifft, können Sie das Issue als [Aufgabenliste](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists) erstellen.
Erläutern Sie den Kontext oder den Grund für das Ausführen der Aufgaben in der Beschreibung.
Listen Sie sicher alle umsetzbaren Aufgaben als Checkliste auf.

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

Wenn Sie sich ein Issue vornehmen, wird erwartet, dass die Aufgabe rechtzeitig abgeschlossen wird. Sollten Sie eine Woche nach Zuweisung keinen Fortschritt erzielen oder die Aufgabe nicht mehr erfüllen können, hinterlassen Sie einen Kommentar und lösen Sie die Zuweisung von sich selbst.

Schritte für die Bearbeitung eines Issues:

1. **Ein Issue finden:** Wenn Sie beitragen möchten, suchen Sie nach Issues mit den Labels [`good first issue`, `help wanted`](#andere_labels_hinzufügen) oder [`p3`](#setzen_eines_prioritätslabels). Die meisten Repositories haben Issues mit diesen Labels. Wählen Sie eines, das zu Ihren Fähigkeiten passt. Eine nützliche Ressource für Issues ist das [MDN Contributors Task Board](https://github.com/orgs/mdn/projects/25). Dort werden offene Issues aus mehreren Repositories aufgelistet. Sie können die Liste anhand von Themen (`Labels`-Spalte) filtern, die Sie interessieren. Eine Beschreibung einiger [Labels](#andere_labels_hinzufügen) wird während des Issue-Triage-Prozesses hinzugefügt.

   > [!NOTE]
   > Ein Issue mit dem Label `needs triage` zeigt an, dass das Kernteam der MDN Web Docs das Issue noch nicht überprüft hat. Beginnen Sie in diesem Fall noch nicht mit der Arbeit daran.

2. **Das Issue zuweisen:** Nachdem Sie ein Issue gefunden haben, prüfen Sie, ob es anderen zugewiesen ist. Hinterlassen Sie einen Kommentar mit Ihrer Absicht, daran zu arbeiten, und weisen Sie sich, falls möglich, [das Issue selber zu](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users#assigning-an-individual-issue-or-pull-request).

3. **Recherche betreiben:** Viele Issues erfordern eine Untersuchung vor Beginn der Arbeit.

   - Klären Sie den Umfang der Arbeit. Wenn Sie Fragen haben, stellen Sie diese in den [MDN Web Docs Chats](/de/docs/MDN/Community/Communication_channels#chat_rooms).
   - Ist das Issue klar beschrieben und die Arbeit offensichtlich, legen Sie los.
   - Ist das Issue nicht gut beschrieben oder sind Sie unsicher, was benötigt wird, erwähnen Sie den Ersteller mit @ und fragen Sie nach weiteren Informationen.

4. **Die Änderungen vornehmen:** Forken und branchieren Sie das Repository. Arbeiten Sie und senden Sie einen [Pull Request](/de/docs/MDN/Community/Pull_requests). [Beziehen Sie das Issue ein](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) in die Beschreibung des Pull Requests. Ein Reviewer wird je nach Art der Änderungen automatisch zugewiesen. (Teams pro Themenbereich sind in der Datei [CODEOWNERS](https://github.com/mdn/content/blob/main/.github/CODEOWNERS) definiert.)

   Nach dem Erstellen des Pull Requests, aber vor Fertigstellung, geben Sie bitte rechtzeitig Bescheid, falls Sie keine Zeit mehr haben. So kann das Team den Beitrag an andere Interessierte weitergeben, um die Arbeit abzuschließen.

5. Sobald Ihr Pull Request überprüft und gemergt wurde, können Sie das zugehörige Issue schließen. Enthält der Pull Request den Satz `Fixes #<issue>`, wird das Issue automatisch nach dem Merge geschlossen.

### Probleme selbst lösen

Wenn Sie einen Fehler entdecken — sei es ein Problem mit dem Design der Webseite oder ein Fehler in der Dokumentation — können Sie versuchen, ihn selbst zu beheben. Lesen Sie unseren [Leitfaden zur Beitragseinreichung](https://github.com/mdn/content/blob/main/CONTRIBUTING.md), um zu erfahren, wie Sie beitragen können.

Wenn der Fehler klein ist, wie ein Typo oder eine geringfügige Verbesserung eines Satzes, oder eine unumstrittene Lösung vorliegt, reichen Sie einen Pull Request ein.

Für alle anderen Fehler beginnen Sie mit dem [Eröffnen eines Issues](#richtlinien_für_das_melden_eines_issues). Kommentieren Sie Ihre Absicht, daran zu arbeiten, und beschreiben Sie maßgeblich mögliche Lösungsschritte. Warten Sie, bis das MDN-Team das Issue triagiert hat, um sicherzustellen, dass es legitim ist und Ihre Lösung genehmigt wurde.

> [!NOTE]
> Wenn Sie vor der Triagierung einen Pull Request öffnen, könnte Ihre Arbeit verloren gehen, falls das Issue als ungültig bewertet wird oder die Lösung nicht den Erwartungen entspricht.
> Nach der Triagierung weisen Sie sich das Issue zu.

Verwenden Sie die [Richtlinien zum Arbeiten an Issues](#richtlinien_für_die_bearbeitung_eines_issues), um das Problem zu lösen, indem Sie die entsprechende Quelle wie folgt aktualisieren:

- MDN Web Docs **Content** (auf Englisch) im [mdn/content](https://github.com/mdn/content) Repository
- MDN Web Docs **übersetzte Inhalte** im [mdn/translated-content](https://github.com/mdn/translated-content) Repository
- MDN Web Docs **Frontend** im [mdn/yari](https://github.com/mdn/yari) Repository

Jedes Repository enthält nützliche Informationen, um Sie anzuleiten.
Für weitere Informationen siehe [unsere Hauptrepositories auf GitHub](/de/docs/MDN/Community/Our_repositories).

## Richtlinien für die Triagierung von Issues

Wenn Sie ein Maintainer oder Eigentümer in der MDN Web Docs GitHub-Organisation sind, sind Sie für die Triagierung von Issues in einem oder mehreren Repositories verantwortlich.

Der allgemeine Triagierungsprozess umfasst [allgemeine Aufgaben](#allgemeine_triagierungsaufgaben) und [spezifische Issue-Triagierungstasks](#aufgaben_für_spezifische_issues).

### Allgemeine Triagierungsaufgaben

- Wenn ein Issue geöffnet wird, erhält es automatisch das Label `needs triage`. Sie können per Suche nach diesem Label nach Issues suchen, die [triagiert werden müssen](#aufgaben_für_spezifische_issues). Andere Mitwirkende sollten daran nicht arbeiten, bevor die Triagierung abgeschlossen ist. (Triagierer erinnern sich daran, das Label `needs triage` nach der Triagierung zu entfernen.)

- Im [mdn/content Repository](https://github.com/mdn/content/issues) wird automatisch ein zusätzliches `Content:` Label, z. B. `Content:CSS` oder `Content:WebAPI`, auf Basis der im Issue genannten MDN URL gesetzt. Themen-spezifische Labels erleichtern die Suche in Ihrem Interessensgebiet.

- Bei Issues zu aktiven nicht-en-US-Sprachen setzen Sie das entsprechende Label (`l10n-fr`, `l10n-zh`, `l10n-ja` etc.). Spezialteams für diese Sprachen werden diese triagieren.

- Sie müssen nicht kontinuierlich Issues triagieren. Nehmen Sie sich z. B. einmal pro Woche 30 Minuten Zeit, um die Issues in Ihrem Verantwortungsbereich zu triagieren.

- Neben dem regelmäßigen Triagieren neuer Issues prüfen Sie alte Bugs auf Stillstand, ob sie geschlossen werden müssen oder ob sie irrelevant sind. Das Label `idle` wird automatisch bei Inaktivität von 30 Tagen gesetzt.
  - Überprüfen Sie zugewiesene Issues, die noch offen sind, auf Fortschritt. Bei mangelndem Fortschritt nach einer Woche fragen Sie nach. Bleibt die Situation nach einer weiteren Woche unverändert, heben Sie die Zuweisung auf und machen Sie das Issue für andere frei.
  - Wenn ein Pull Request die Lösung bietet, aber nach einer Woche nicht geprüft wurde, lassen Sie dem Reviewer eine freundliche Erinnerung zukommen.
  - Falls ein Pull Request nach Überprüfungsrückmeldungen stecken bleibt, fragen Sie beim Autor nach. Verstreichen zwei Wochen ohne Änderungen, lösen Sie entweder das Problem selbst oder schließen Sie den Pull Request und das Issue.

### Aufgaben für spezifische Issues

Hier einige Richtlinien zur Triagierung von Issues.

#### Überprüfung auf Gültigkeit

Dies sind wichtige Punkte zur Beurteilung der Gültigkeit eines Issues:

- Prüfen Sie, ob das gemeldete Problem berechtigt ist und die Behebung die Inhalte oder die Website verbessert.
- Bewerten Sie den Einfluss des Fixes, ob lokal oder seitenübergreifend.
- Sofern Diskussionen erforderlich erscheinen, leiten Sie den Autor zu [GitHub Diskussionen](https://github.com/orgs/mdn/discussions).
- Stellen Sie sicher, dass das Issue unseren [Schreibrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und [Vorlagen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) entspricht.
- Prüfen Sie, ob vorgeschlagene Links mit unserer [Policy für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) übereinstimmen.

#### Überprüfung auf Vollständigkeit der Informationen

Vergleichen Sie jedes Issue mit der folgenden Checkliste, um sicherzustellen, dass alle notwendigen Informationen vorhanden sind:

- URL der MDN Web Docs-Seite mit dem Problem oder Beispielsseite, falls das Problem mehrfach auftritt.
- Der spezifische Abschnitt oder Titel, unter dem das Problem auftritt.
- Eine klare Beschreibung der inkorrekten, unvollständigen oder fehlenden Inhalte.

Fehlen diese Details, sollten Sie den Autor kontaktieren und das Label `needs info` setzen. Setzen Sie die Triagierung fort, sobald die Informationen vorliegen (dann das Label entfernen). Eine Woche ist angemessen, um auf eine Antwort zu warten.

#### Setzen eines Prioritätslabels

Vergeben Sie ein Prioritätslabel basierend auf der Schwere des Issues:

- Kritisches Issue: Sofortige Bearbeitung erforderlich, schwerwiegende Auswirkungen (z. B.: fehlerhafter Code mit Sicherheitsrisiken).

  - Label: `p0` (sofortige Bearbeitung)

- Wesentliches Issue: Starke Beeinträchtigung der Seitennützlichkeit (z. B.: veralteter Inhalt, defekte Beispiele etc.).

  - Labels: `p1`, `p2` (relativ dringend)

- Geringfügiges Issue: Verbesserungen ohne einschneidende Auswirkung, ideal für erste Beiträge.
  - Label: `p3` (Bearbeitungszeitpunkt unbestimmt)

#### Hilfreiche Informationen hinzufügen

Fügen Sie Informationen hinzu, die Beitragsleistenden bei der Bearbeitung helfen. Dies könnten Schritte, Links zu ähnlichen Issues oder Ressourcen sein. Ist das Issue als `good first issue` kategorisiert, ist ein gut durchdachter Plan besonders hilfreich, um Neulinge einzuarbeiten.

Ein Beispiel:

```md
To whoever fixes this issue, it looks like the following is needed:

- Update the first paragraph below heading X to correct the problem with Y
- Add a description of X
- Update the compatibility data at Link-X
```

#### Andere Labels hinzufügen

Fügen Sie je nach Bedarf passende Labels hinzu:

- `effort: small`, `effort: medium`, `effort: large`: Symptome den voraussichtlichen Aufwand.
- `good first issue`: Einfache Probleme für Neulinge.
- `help wanted`: Bedarf an Expertise.
- `broken link external`: Externe defekte Links.
- `document not written`: Fehlendes und notwendiges Dokument.
- `needs content update`: Fix benötigt equivalent Update im `mdn/content` Repository.

  > [!NOTE]
  > Entfernen Sie nach Abschluss der Triagierung das Label `needs triage`.
