---
title: Leitfaden zur Einreichung und Überprüfung von Pull-Anfragen
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{MDNSidebar}}

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an MDN Web Docs umfassen:

- **Tägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattformaktualisierungen und Inhaltsergänzungen.
  Dies wird normalerweise von Mitarbeitern der MDN Web Docs durchgeführt, die für Mozilla, Google, Open Web Docs und Samsung arbeiten, aber auch von Community-Freiwilligen.
- **Kleinere Korrekturen** und kleine Aktualisierungen der Website zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten.
  Diese Probleme werden normalerweise von Lesern der MDN Web Docs gefunden.
- **Fehlerbehebungen in Inhalten**, die normalerweise von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content` Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie die Inhaltsänderungen vorgenommen werden, werden sie als Pull-Anfragen auf GitHub eingereicht.
Die Inhaltsänderungen durchlaufen die folgenden Phasen, bevor sie auf MDN Web Docs veröffentlicht werden:

1. **Einreichung von Änderungen:** Als Autor einer Pull-Anfrage reichen Sie Änderungen durch das Öffnen einer Pull-Anfrage ein.
   Lesen Sie die Abschnitte [Bevor Sie beginnen](#bevor_sie_beginnen), [Öffnen Sie eine Pull-Anfrage](#öffnen_sie_eine_pull-anfrage) und [Nach dem Öffnen einer Pull-Anfrage](#nach_dem_öffnen_einer_pull-anfrage), um mehr über unsere Prozesse zu erfahren.
2. **Überprüfung von Änderungen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft.
   Weitere Details finden Sie im Abschnitt [Pull-Anfrage Überprüfungsprozess](#pull-anfrage_überprüfungsprozess).
3. **Ansehen der veröffentlichten Änderungen:** Auf `mdn/content` aktualisierte Inhalte werden innerhalb eines Tages nach dem Zusammenführen durch einen einmal alle 24 Stunden stattfindenden Site-Neuaufbau live geschaltet.

## Einreichen von Änderungen

### Werte und Teilnahme

Wir möchten, dass MDN Web Docs eine einladende, freundliche Community ist, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unserem [Verhaltenskodex](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) folgen, was bedeutet, [Mozillas Community-Teilnahmerichtlinien](https://www.mozilla.org/en-US/about/governance/policies/participation/) einzuhalten.
Seien Sie höflich und konstruktiv, wenn Sie Pull-Anfragen eröffnen, Überprüfungskommentare schreiben, mit dem Autor der Pull-Anfrage oder anderen Community-Mitgliedern interagieren.
Wenn Sie oder jemand anderes Verhalten erlebt hat, das möglicherweise illegal ist oder das Sie sich unsicher, unerwünscht oder unwohl fühlen lässt, ermutigen wir Sie, es zu [melden](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/).

### Bevor Sie beginnen

Bevor Sie an MDN arbeiten, gehen Sie bitte die unten aufgeführten Empfehlungen und Richtlinien durch.

**Pull-Anfragen müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund dafür, dass wir diese Einschränkung haben, ist zu vermeiden, dass Sie an irgendeiner Art von Aufgabe beginnen, an der möglicherweise bereits jemand anderes arbeitet.
Durchsuchen Sie die Probleme und Pull-Anfragen im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und bestätigen Sie, dass die Arbeit, die Sie beginnen möchten, nicht bereits in Bearbeitung ist.
Wenn Sie einen Beitrag zum MDN-Projekt leisten möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie einen Beitrag zum Projekt leisten möchten**, können Sie Aufgaben unter "Issues" in einem der [MDN-GitHub-Repositories](https://github.com/orgs/mdn/repositories) finden (zum Beispiel [`mdn/content` Issues](https://github.com/mdn/content/issues)) und auf unseren [öffentlichen GitHub-Projekttafeln](https://github.com/orgs/mdn/projects).
  Stellen Sie sicher, dass das Problem niemandem zugewiesen ist und niemand bereits eine Pull-Anfrage für die Aufgabe geöffnet hat.
  Probleme mit dem Label `good first issue` sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zuerst ein Problem öffnen.
  **Probleme benötigen eine Antwort von den Betreuern, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein Problem, das mit einer Pull-Anfrage gelöst wird, gültig ist und Ihre Pull-Anfrage akzeptiert wird.
  Weitere Informationen zu Problemen finden Sie auf unseren [Community-Seiten für GitHub-Probleme](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder eine neue Funktion vorschlagen möchten**, reichen Sie einen Vorschlag über die "Neuer Inhalt oder neue Funktion Vorschlag" [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie sich nicht sicher sind, wo Sie anfangen sollen, wenden Sie sich an uns auf [dem Discord-Server](/discord) und fragen Sie nach Feedback.

### Öffnen Sie eine Pull-Anfrage

Wenn Sie bereit sind, eine Pull-Anfrage zu öffnen, folgen Sie diesen Richtlinien:

- **Pull-Anfragen sollten kurz und auf ein Problem fokussiert sein:** Wenn möglich, gruppieren Sie zusammenhängende Änderungen in mehrere, kleine Pull-Anfragen.
  Wenn eine Pull-Anfrage zu groß wird, kann der Prüfer sie schließen und Sie bitten, Pull-Anfragen für jede logische Gruppe von zusammengehörenden Änderungen einzureichen.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für die Pull-Anfrage wie möglich an.
- **Fügen Sie den Link zum Problem hinzu, das Sie lösen:** In der Pull-Anfrage-Beschreibung fügen Sie „Fixes“ hinzu, wenn es das Problem vollständig löst, oder „Relates to“, wenn es ein verwandtes Problem ist.
  Weitere Informationen zum Verknüpfen von Pull-Anfragen mit Problemen finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on' hinzu** mit einem Link zu einer Abhängigkeit, wenn es Pull-Anfragen gibt, die zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die beeinflussen, wie Beispiele verwendet werden, sollten die zugehörigen Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer, wie ein Teammitglied oder einen Themenverantwortlichen, hinzufügen, wenn Sie bereits wissen, wer Ihre Pull-Anfrage prüfen sollte.
- **Machen Sie keine Änderungen nur an der Grammatik:**
  MDN Web Docs enthält technische Dokumentation; Sie sollten keine Überarbeitungen des Prosastils vorschlagen, außer die Grammatik ist falsch.
- **Fügen Sie keine unnötigen Zeilenumbrüche ein oder entfernen Sie sie**, auf Seiten, die einem bestimmten Formatierungsstil folgen.
- **Aktivieren Sie kein automatisches Zusammenführen.**

### Nach dem Öffnen einer Pull-Anfrage

- **Beheben Sie CI-Fehler** aus den automatisierten Tests, die als GitHub Actions ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, zu versuchen, sie zu lösen.
  Wenn Sie nicht wissen, wie man die zugrunde liegenden Probleme löst, bitten Sie um Hilfe.
- **Lösen Sie Zusammenführungskonflikte** mit dem Hauptzweig; Sie sind dafür verantwortlich, diese zu lösen.
  Sie können dies tun, indem Sie den `mdn/main`-Zweig in Ihren Zweig zusammenführen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Aktualisieren Ihres Zweigs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie auf Feedback ansprechbar.**
  Dies bedeutet, dass Sie bereit sein müssen, Änderungen an der Pull-Anfrage basierend auf dem Überprüfungskommentar vorzunehmen.
  Wenn eine Überprüfung stattfindet und die Änderungen nicht vorgenommen werden, kann die Pull-Anfrage geschlossen werden.
- **Seien Sie während des Überprüfungsprozesses geduldig.**
  Die MDN-Organisation erhält eine große Menge an Pull-Anfragen und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie geschlossene Pull-Anfragen nicht erneut.**
  Wenn Sie eine neue Pull-Anfrage erstellen müssen, können Sie auf die Geschlossene verweisen.

## Pull-Anfrage Überprüfungsprozess

Prüfer werden beim Öffnen einer Pull-Anfrage automatisch anhand einer `CODEOWNERS`-Datei zugewiesen, aber wenn es eine spezielle Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) manuell.
Wir verwenden auch eine automatische Kennzeichnung auf Pull-Anfragen, um ihnen bei der Triagierung zu helfen.
Betreuer können Pull-Anfragen weiter triagieren und bei Bedarf zusätzliche Kennzeichnungen hinzufügen, wie `needs-info` oder `on-hold`, basierend auf dem Kontext.

Wenn Sie eine Pull-Anfrage überprüfen möchten, aber nicht als Prüfer gelistet sind, können Sie sich selbst als Prüfer hinzufügen.
Es ist höflich, zuerst bei den vorhandenen Prüfern nachzufragen, indem Sie auf die Pull-Anfrage kommentieren, dass Sie eine Überprüfung beginnen möchten.

### Prüfer und zugewiesene Personen

Das MDN Web Docs-Team verwendet Prüfer und zugewiesene Personen, um den Status von Pull-Anfragen zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen in der Pull-Anfrage bewerten und dem Autor Feedback geben.
- **Zugewiesene Personen** sind Personen, die dafür verantwortlich sind, sicherzustellen, dass die Pull-Anfrage nicht blockiert ist.
  Nicht alle Pull-Anfragen haben zugewiesene Personen, aber wenn sie dies tun, sind sie verantwortlich dafür, dass die Pull-Anfrage voranschreitet.
  Eine zugewiesene Person hilft der Arbeit, zu einem Abschluss zu kommen, indem sie sie entweder zusammenführt, schließt oder selbst entblockiert.

Ein Pull-Anfrage-Prüfer oder eine zugewiesene Person ist verantwortlich dafür, die Änderungen zusammenzuführen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Pull-Anfrage-Beschreibung, um sicherzustellen, dass niemand bestimmtes sie überprüfen sollte.
Stellen Sie sicher, dass alle kontinuierlichen Integrationstasks (CI) erfolgreich abgeschlossen und dass keine Zusammenführungskonflikte vorhanden sind.

Wenn irgendeine Aufgabe fehlschlägt oder es Zusammenführungskonflikte gibt, teilen Sie dies dem Autor mit; es liegt in seiner Verantwortung, diese zu beheben.
Sie können den Autor als **zugewiesene Person** setzen, um anzuzeigen, dass eine Pull-Anfrage seine Aufmerksamkeit benötigt, bevor eine Überprüfung beginnen kann.
Lassen Sie dem Autor die Möglichkeit offen, um Hilfe zu bitten, insbesondere bei neuen Mitwirkenden am Projekt.

### Eine Pull-Anfrage überprüfen

Was die Änderungen in einer Pull-Anfrage betrifft, müssen Inhalte und Prosa den [MDN-Schreibstilrichtlinien](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen und Codebeispiele müssen dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) folgen.

Wenn Sie eine Pull-Anfrage überprüfen, sollten Sie:

- **Einen Kommentar zur Pull-Anfrage hinzufügen**, um den Autor wissen zu lassen, dass Sie von der Pull-Anfrage wissen und mit der Überprüfung beginnen werden.
  Dies soll vermeiden, dass jemand anderes gleichzeitig die Pull-Anfrage unnötig überprüft.
- **Den Umfang der Überprüfung** auf die Änderungen in der Pull-Anfrage begrenzen.
  Öffnen Sie ein Folgeproblem oder eine Pull-Anfrage, um andere nicht von der Pull-Anfrage abgedeckte Verbesserungen anzugehen.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn technische Unterstützung bei der Überprüfung erforderlich ist.
- **Pull-Anfragen mit nicht zusammenhängenden Änderungen schließen**, wenn sie zu komplex sind oder mehrere nicht zusammengehörende Änderungen enthalten.
  In solchen Fällen bitten Sie den Pull-Anfrage-Autor, seine Änderungen in kleinere Abschnitte aufzuteilen.
- **Arbeitsausgleich anfordern**, wenn Sie voll ausgelastet sind und keine Kapazitäten für die Überprüfung haben.
  Markieren Sie das `@core-yari-content` Team und bitten Sie, ob jemand anderes eintreten kann.
- **Nicht mergen, wenn 'depends on'** Pull-Anfragen zuerst zusammengeführt werden müssen.
- **Keine Pull-Anfragen zusammenführen, die fehlschlagende Tests aufweisen.**
  Es ist eine gute [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main`-Zweig stabil zu halten, um Störungen für Mitwirkende, Betreuer und für automatisierte Prozesse zu vermeiden.
  Ein instabiler `main`-Zweig blockiert alle anderen Pull-Anfragen und macht es schwierig, andere Beiträge zu überprüfen und zusammenzuführen.
  Außerdem erhalten Mitwirkende, die Repositories beobachten, eine hohe Anzahl von Benachrichtigungen und unnötiger Lärm durch fehlschlagende Tests kann frustrierend sein.
  Wenn Sie sich nicht sicher sind, wie Sie die fehlschlagenden Tests beheben können, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie die Pull-Anfrage jemandem anderen zu.

Wenn eine Pull-Anfrage abgesehen von kleinen Tippfehlern oder anderen geringfügigen Problemen gut aussieht, möchten Sie das Problem möglicherweise direkt beheben.
Sie können dies tun, vorausgesetzt, die Pull-Anfrage [wurde eingerichtet, um Änderungen zuzulassen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zu verwenden, um kleinere Probleme zu beheben, da sie zusammengefasst und in einem Durchgang festgeschrieben werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Optionen: **genehmigen**, **kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann jede Option verwendet werden sollte.

### Anfordern von Änderungen

Verwenden Sie die Option Änderungen anfordern, wenn das Feedback, das Sie gegeben haben, _muss_ von dem Autor angesprochen und von dem Prüfer erneut überprüft werden, bevor die Pull-Anfrage genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Kommentaroption, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erforderlich ist.
Kurz gesagt, Sie vertrauen dem Autor und anderen Prüfern darauf, gutes Urteilsvermögen zu haben.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles gut aussieht und aus Ihrer Sicht zur Zusammenführung bereit ist.
Nach der Einreichung Ihrer Überprüfung können Sie die Pull-Anfrage sicher zusammenführen, wenn es keine anderen Prüfer oder ausstehenden Überprüfungskommentare gibt, die zu beachten sind.

#### Was tun, wenn Sie nicht weiterkommen

Wenn Sie eine Inhaltsänderung nicht verstehen oder das Gefühl haben, dass sie zu groß und komplex ist, um sie zu bewältigen, geraten Sie nicht in Panik!
Ein guter Ausgangspunkt ist, den Pull-Anfrage-Autor nach Informationen zu fragen, die Ihnen helfen können.

Es ist selten, dass Sie aufgefordert werden, eine große, komplexe Inhaltsänderung ohne Vorwarnung zu überprüfen.
Wenn dies jedoch passiert, sollte die Pull-Anfrage-Beschreibung auf ein Problem verweisen, das die Hintergrundinformationen erklärt.

Wenn Sie sich immer noch nicht sicher sind oder denken, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs-Team und bitten Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Prüfer

Dieser Abschnitt bietet Details zu erwarteten Bearbeitungszeiten beim Beantworten von Überprüfungskommentaren, wenn Sie ein Pull-Anfrage-Autor sind, und beim Überprüfen von Pull-Anfragen, wenn Sie ein Prüfer sind.

- **Überprüfung**:
  Der Pull-Anfrage-Prüfer sollte in der Lage sein, die Änderungen in weniger als 2 Wochen zu überprüfen.
  In den 2 Wochen nach dem Öffnen einer Pull-Anfrage kann der Prüfer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung der Pull-Anfrage beginnen kann
  - Um technische oder Ressourcensupport bitten
- **Anforderung angeforderter Änderungen:**
  Der Pull-Anfrage-Autor sollte in der Lage sein, auf die Kommentare zu antworten oder die Kommentare innerhalb von 4 Wochen oder weniger zu beheben.
  Wenn der Pull-Anfrage-Autor nicht in der Lage ist, innerhalb dieser Zeit auf die Überprüfungskommentare zu antworten oder sie zu beheben, kann der Prüfer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen festlegen und die Pull-Anfrage zusammenführen
  - Die Pull-Anfrage schließen

### Externe Prüfer

Einige Pull-Anfragen im MDN-Inhaltsrepository beziehen sich auf spezielle Arbeiten von Browseranbietern oder Organisationen mit definierten Autoren und Prüfern.
Der Autor wird in diesen Fällen den Benutzernamen des Prüfers in einer Zeile am Ende der Pull-Anfrage-Beschreibung einfügen, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Prüfungsanfrage erhalten und Sie durch einen anderen Prüfer, wie oben beschrieben, überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der im Beschreibungstext genannte Prüfer die Änderungen genehmigt hat, wird er eine Genehmigung durch die `CODEOWNERS` anfordern.

## Leseliste

Prüfer werden ermutigt, die folgenden Artikel zu lesen, um Hilfe bei häufigen Aufgaben zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man eine unfertige oder abgelehnte Pull-Anfrage schließt
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Hinweise zum Geben von Feedback
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
