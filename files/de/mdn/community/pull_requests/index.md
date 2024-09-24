---
title: Richtlinien für die Einreichung und Überprüfung von Pull-Anfragen
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: 6610050dace0bfa2bba703576225aef6f84f36fe
---

{{MDNSidebar}}

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an MDN Web Docs vornehmen und wie die Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an MDN Web Docs umfassen:

- **Tägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattformaktualisierungen und Inhaltszusätze.
  Dies wird normalerweise von Mitarbeitern der MDN Web Docs, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, sowie von Freiwilligen aus der Community durchgeführt.
- **Kleinere Korrekturen** und kleine Aktualisierungen zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten auf der Website.
  Diese Probleme werden normalerweise von Lesern der MDN Web Docs gefunden.
- **Inhaltsfehlerbehebungen**, die in der Regel von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content`-Repository](https://github.com/mdn/content/issues) zu schließen.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull-Anfragen auf GitHub eingereicht.
Die Inhaltsänderungen durchlaufen folgende Phasen, bevor sie auf MDN Web Docs veröffentlicht werden:

1. **Einreichen von Änderungen:** Als Autor einer Pull-Anfrage reichen Sie Änderungen ein, indem Sie eine Pull-Anfrage öffnen.
   Lesen Sie die Abschnitte [Bevor Sie beginnen](#bevor_sie_beginnen), [Eine Pull-Anfrage öffnen](#eine_pull-anfrage_öffnen) und [Nachdem Sie eine Pull-Anfrage geöffnet haben](#nachdem_sie_eine_pull-anfrage_geöffnet_haben), um mehr über unsere Prozesse zu erfahren.
2. **Überprüfen von Änderungen:** Ihre Änderungen werden von MDN-Mitgliedern und Freiwilligen überprüft.
   Weitere Details finden Sie im Abschnitt [Pull-Anfrage Überprüfungsprozess](#pull-anfrage_überprüfungsprozess).
3. **Anzeigen veröffentlichter Änderungen:** Aktualisierte Inhalte auf `mdn/content` werden innerhalb eines Tages nach dem Zusammenführen durch einen einmal täglich erfolgenden Seitenneubau live geschaltet.

## Einreichen von Änderungen

### Werte und Teilnahme

Wir möchten, dass MDN Web Docs eine einladende, freundliche Community ist, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unserem [Verhaltenskodex](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) folgen, was bedeutet, dass sie sich an [Mozillas Community-Teilnahmerichtlinien](https://www.mozilla.org/en-US/about/governance/policies/participation/) halten müssen.
Seien Sie höflich und konstruktiv beim Öffnen von Pull-Anfragen, Schreiben von Überprüfungskommentaren und der Interaktion mit dem Autor der Pull-Anfrage oder anderen Mitgliedern der Community.
Wenn Sie oder jemand anderes ein potenziell illegales oder unangenehmes Verhalten erlebt haben, das Sie unsicher, unwillkommen oder unwohl fühlen lässt, ermutigen wir Sie, [dies zu melden](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an MDN beginnen, lesen Sie bitte die Empfehlungen und Richtlinien, die unten aufgeführt sind, durch.

**Pull-Anfragen müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, zu verhindern, dass Sie an einer Aufgabe beginnen, an der möglicherweise schon jemand anderes arbeitet.
Durchsuchen Sie die Probleme und Pull-Anfragen im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und stellen Sie sicher, dass die Arbeit, die Sie beginnen möchten, nicht bereits bearbeitet wird.
Wenn Sie einen Beitrag zum MDN-Projekt leisten möchten, befinden Sie sich in einer der folgenden Situationen:

- **Wenn Sie einen Beitrag zum Projekt leisten möchten**, finden Sie Aufgaben unter 'Issues' in einem der [MDN GitHub Repositories](https://github.com/orgs/mdn/repositories) (zum Beispiel, [`mdn/content` Issues](https://github.com/mdn/content/issues)) und unseren [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects).
  Stellen Sie sicher, dass das Problem niemandem zugewiesen ist und noch niemand eine Pull-Anfrage für die Aufgabe geöffnet hat.
  Probleme mit dem Label `good first issue` sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zunächst ein Problem öffnen.
  **Probleme benötigen eine Antwort von den Wartenden, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein durch eine Pull-Anfrage angesprochenes Problem gültig ist und Ihre Pull-Anfrage akzeptiert wird.
  Mehr Informationen zu Problemen finden Sie auf unseren [Community-Seiten für GitHub-Probleme](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder ein neues Feature vorschlagen möchten**, reichen Sie einen Vorschlag durch die Vorlage 'Vorschlag für neue Inhalte oder Funktionalität' [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie nicht sicher sind, wo Sie anfangen sollen, kontaktieren Sie uns auf [dem Discord-Server](/discord) und fragen Sie nach Feedback.

### Eine Pull-Anfrage öffnen

Wenn Sie bereit sind, eine Pull-Anfrage zu öffnen, folgen Sie diesen Richtlinien:

- **Pull-Anfragen sollten kurz und auf ein Problem fokussiert sein:** Wenn möglich, gruppieren Sie verwandte Änderungen in mehrere, kleine Pull-Anfragen.
  Wenn eine Pull-Anfrage zu groß wird, kann der Prüfer sie schließen und Sie bitten, Pull-Anfragen für jede logische Gruppe von zusammengehörigen Änderungen einzureichen.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für die Pull-Anfrage wie möglich.
- **Fügen Sie den Link zum Problem hinzu, das Sie lösen:** In der Beschreibung der Pull-Anfrage fügen Sie 'Fixes' hinzu, wenn es das Problem vollständig löst, oder 'Relates to', wenn es ein verwandtes Problem ist.
  Mehr Informationen über das Verlinken zu Problemen in Pull-Anfragen finden Sie in den [GitHub-Dokumentationen](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on' hinzu** mit einem Link zu einer Abhängigkeit, wenn es Pull-Anfragen gibt, die zuerst zusammengeführt werden müssen (z.B. Codebeispiele in anderen Repositories).
- **Begleiten Sie Änderungen an Codebeispielen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die die Nutzung der Beispiele beeinflussen, sollten die zugehörigen Codebeispiele ebenfalls aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer hinzufügen, z.B. ein Teammitglied oder einen Themeninhaber, wenn Sie bereits wissen, wer Ihre Pull-Anfrage überprüfen soll.
- **Nehmen Sie keine Änderungen nur der Grammatik vor:**
  MDN Web Docs enthält technische Dokumentation; Sie sollten keine Änderungen am Schreibstil vorschlagen, außer wenn die Grammatik falsch ist.
- **Fügen Sie nicht unnötig Zeilenumbrüche hinzu oder entfernen Sie sie** auf Seiten, die einem bestimmten Formatierungsstil folgen.
- **Aktivieren Sie nicht das automatische Zusammenführen.**

### Nachdem Sie eine Pull-Anfrage geöffnet haben

- **Behandeln Sie CI-Fehler** von den automatisierten Tests, die als GitHub-Aktionen ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, sie zu lösen.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme beheben können, bitten Sie um Hilfe.
- **Lösen Sie Konflikte beim Zusammenführen** mit dem Hauptzweig; es liegt in Ihrer Verantwortung, diese zu lösen.
  Sie können dies tun, indem Sie den `mdn/main` Zweig in Ihren Zweig zusammenführen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Aktualisieren Ihres Zweigs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsschnell gegenüber Feedback.**
  Dies bedeutet, dass Sie bereit sein müssen, Änderungen an der Pull-Anfrage basierend auf der Überprüfung vorzunehmen.
  Wenn eine Überprüfung erfolgt und die Änderungen nicht vorgenommen werden, kann die Pull-Anfrage geschlossen werden.
- **Seien Sie geduldig im Überprüfungsprozess.**
  Die MDN-Organisation erhält eine große Anzahl von Pull-Anfragen, und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie geschlossene Pull-Anfragen nicht erneut.**
  Wenn Sie eine neue Pull-Anfrage erstellen müssen, kann sie auf die geschlossene verweisen.

## Pull-Anfrage Überprüfungsprozess

Prüfer werden automatisch zugewiesen, wenn Sie eine Pull-Anfrage basierend auf einer `CODEOWNERS`-Datei öffnen, aber wenn es eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch die automatische Kennzeichnung von Pull-Anfragen, um sie zu triagieren.
Wartende können Pull-Anfragen weiter triagieren und zusätzliche Labels wie `needs-info` oder `on-hold` hinzufügen, falls erforderlich basierend auf dem Kontext.

Wenn Sie eine Pull-Anfrage überprüfen möchten, aber nicht als Prüfer aufgelistet sind, können Sie sich selbst als einen hinzufügen.
Es ist höflich, zunächst mit den vorhandenen Prüfern zu klären, indem Sie in der Pull-Anfrage kommentieren, dass Sie mit der Überprüfung beginnen möchten.

### Prüfer und Beauftragte

Das MDN Web Docs-Team verwendet Prüfer und Beauftragte, um den Status von Pull-Anfragen zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen in der Pull-Anfrage bewerten und dem Autor Feedback geben.
- **Beauftragte** sind Personen, die dafür verantwortlich sind, sicherzustellen, dass die Pull-Anfrage nicht blockiert wird.
  Nicht alle Pull-Anfragen haben Beauftragte, aber wenn sie es tun, sind sie dafür verantwortlich, sicherzustellen, dass die Pull-Anfrage voranschreitet.
  Ein Beauftragter hilft dabei, die Arbeit zu einem Abschluss zu bringen, entweder durch Zusammenführen, Schließen oder durch das Durchführen von Arbeiten, die die Blockierung beseitigen.

Ein Prüfer oder Beauftragter einer Pull-Anfrage ist verantwortlich für das Zusammenführen der Änderungen.

Bevor Sie mit einer Überprüfung beginnen, prüfen Sie die Beschreibung der Pull-Anfrage, um sicherzustellen, dass keine bestimmte Person sie überprüfen sollte.
Stellen Sie sicher, dass alle Aufgaben der kontinuierlichen Integration (CI) erfolgreich abgeschlossen wurden und dass es keine Zusammenführungskonflikte gibt.

Wenn eine der Aufgaben fehlschlägt oder es Zusammenführungskonflikte gibt, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, dies zu klären.
Sie können den Autor als **Beauftragten** festlegen, um anzuzeigen, dass eine Pull-Anfrage seine Aufmerksamkeit benötigt, bevor eine Überprüfung beginnen kann.
Lassen Sie dem Autor die Möglichkeit, um Hilfe zu bitten, insbesondere neuen Mitwirkenden am Projekt.

### Eine Pull-Anfrage überprüfen

Wenn es um die Änderungen in einer Pull-Anfrage geht, müssen Inhalte und Prosa dem [MDN-Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) und Beispielcode dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) entsprechen.

Wenn Sie eine Pull-Anfrage überprüfen, sollten Sie:

- **Einen Kommentar hinzufügen** zur Pull-Anfrage, um dem Autor mitzuteilen, dass Sie die Pull-Anfrage zur Kenntnis genommen haben und mit der Überprüfung beginnen.
  Dies ist, um zu vermeiden, dass jemand anderes gleichzeitig unnötigerweise mit der Überprüfung der Pull-Anfrage beginnt.
- **Den Umfang der Überprüfung auf die Änderungen in der Pull-Anfrage beschränken.**
  Öffnen Sie ein Folgeproblem oder eine Pull-Anfrage, um andere Verbesserungen zu adressieren, die nicht von der Pull-Anfrage abgedeckt sind.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Pull-Anfragen mit nicht verwandten Änderungen schließen**, wenn sie zu komplex sind oder mehrere nicht verwandte Änderungen enthalten.
  In solchen Fällen bitten Sie den Pull-Anfrage-Autor, seine Änderungen in kleinere Abschnitte einzureichen.
- **Lastenausgleich anfordern**, wenn Ihre Kapazität ausgeschöpft ist und Sie nicht die Bandbreite für die Überprüfung haben.
  Markieren Sie das `@core-yari-content` Team und fragen Sie, ob jemand anderes einspringen kann.
- **Fügen Sie nicht zusammen, es sei denn, 'depends on'** Pull-Anfragen sind zuerst zusammengeführt.
- **Fügen Sie keine Pull-Anfragen zusammen, die fehlerhafte Tests haben.**
  Es ist eine gute [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main` Zweig stabil zu halten, um Störungen für Mitwirkende, Wartende und automatisierte Prozesse zu vermeiden.
  Ein instabiler `main` Zweig blockiert alle anderen Pull-Anfragen und macht es schwierig für andere, Beiträge zu überprüfen und zusammenzuführen.
  Außerdem erhalten Mitwirkende, die Repositories beobachten, hohe Volumen an Benachrichtigungen und unnötiger Lärm, verursacht durch fehlerhafte Tests, kann frustrierend sein.
  Wenn Sie nicht wissen, wie man die fehlerhaften Tests behebt, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie die Pull-Anfrage jemand anderem zu.

Wenn eine Pull-Anfrage abgesehen von kleinen Tippfehlern oder anderen kleineren Problemen gut aussieht, können Sie das Problem möglicherweise direkt beheben.
Sie können dies tun, vorausgesetzt, die Pull-Anfrage [wurde eingerichtet, um Änderungen zuzulassen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) für kleinere Probleme zu verwenden, da diese gesammelt und in einem Schritt übernommen werden können.

Wenn Sie Ihre Überprüfung einreichen, haben Sie drei Optionen: **Genehmigen**, **Kommentieren** oder **Änderungen anfordern**.
Die folgenden Abschnitte erklären, wann jede Option zu verwenden ist.

### Änderungen anfordern

Verwenden Sie die Option Änderungen anfordern, wenn das von Ihnen gegebene Feedback _bearbeitet_ werden muss, bevor die Pull-Anfrage genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Kommentieren-Option, wenn Ihr Feedback nicht kritisch ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen dem Autor und anderen Prüfern, dass sie ein gutes Urteilsvermögen verwenden.

#### Genehmigen

Verwenden Sie die Genehmigen-Option, wenn alles gut aussieht und bereit für die Zusammenführung aus Ihrer Sicht ist.
Nach Einreichung Ihrer Überprüfung können Sie die Pull-Anfrage gefahrlos zusammenführen, wenn es keine anderen Prüfer oder ausstehenden Überprüfungskommentare zu bearbeiten gibt.

#### Was tun, wenn Sie feststecken

Wenn Sie eine Inhaltsänderung nicht verstehen oder das Gefühl haben, dass sie zu groß und komplex ist, um damit umzugehen – keine Panik!
Ein guter Anfang ist, Informationen vom Autor der Pull-Anfrage zu erfragen.

Es ist selten, dass Sie dazu gezwungen werden, eine große, komplexe Inhaltsänderung ohne Vorwarnung zu überprüfen.
Wenn dies jedoch passiert, sollte die Beschreibung der Pull-Anfrage auf ein Problem verweisen, das die Hintergrundinformationen erklärt.

Wenn Sie immer noch unsicher sind oder denken, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs-Team und bitten Sie um Hilfe.

### Richtlinien für die Bearbeitungszeiten für Autoren und Prüfer

Dieser Abschnitt bietet Details zu den erwarteten Bearbeitungszeiten beim Reagieren auf Überprüfungskommentare, wenn Sie ein Pull-Anfrage-Autor sind, und beim Überprüfen von Pull-Anfragen, wenn Sie ein Prüfer sind.

- **Überprüfen:**
  Der Pull-Anfrage-Prüfer sollte in der Lage sein, die Änderungen in 2 Wochen oder weniger zu überprüfen.
  In den 2 Wochen, nachdem eine Pull-Anfrage geöffnet wurde, kann der Prüfer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung der Pull-Anfrage beginnen kann
  - Um technische oder Ressourcenhilfe bitten
- **Anfordern von Änderungen bearbeiten:**
  Der Pull-Anfrage-Autor sollte in der Lage sein, auf die Kommentare zu reagieren oder sie in 4 Wochen oder weniger zu beheben.
  Wenn der Pull-Anfrage-Autor nicht in der Lage ist, auf die Überprüfungskommentare in dieser Zeit zu reagieren oder sie zu beheben, kann der Prüfer eine der folgenden Optionen wählen:
  - Die Änderungen übernehmen und die Pull-Anfrage zusammenführen
  - Die Pull-Anfrage schließen

### Externe Gutachter

Einige Pull-Anfragen im MDN-Inhaltsrepository beziehen sich auf spezifische Arbeiten von Browseranbietern oder Organisationen mit definierten Autoren und Gutachtern.
Der Autor wird in diesen Fällen den Benutzernamen des Prüfers in einer Zeile am Ende der Pull-Anfragedeskription aufnehmen, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und mit einem anderen Prüfer wie oben beschrieben überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der im Beschreibungstext erwähnte Prüfer die Änderungen genehmigt hat, bittet er um eine Genehmigung, die von den `CODEOWNERS` benötigt wird.

## Leseliste

Prüfer werden ermutigt, die folgenden Artikel für Hilfe bei alltäglichen Aufgaben zu lesen:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man eine unvollendete oder abgelehnte Pull-Anfrage schließt
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Hinweise zum Geben von Feedback
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
