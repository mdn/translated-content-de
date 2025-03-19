---
title: Einreichung und Überprüfung von Pull-Requests
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Dieses Dokument beschreibt, wie Mitwirkende Änderungen an den MDN Web Docs vornehmen und wie diese Änderungen überprüft und auf der Website veröffentlicht werden.
Inhaltsänderungen an den MDN Web Docs umfassen:

- **Alltägliche Verbesserungen** für die Dokumentation von APIs, CSS-Eigenschaften, Plattformaktualisierungen und Inhaltsergänzungen.
  Dies wird in der Regel von den Mitarbeitern der MDN Web Docs durchgeführt, die für Mozilla, Google, Open Web Docs, Samsung arbeiten, aber auch von freiwilligen Mitgliedern der Community.
- **Kleinere Korrekturen** und kleine Aktualisierungen der Seite zur Behebung von Tippfehlern, grammatikalischen Problemen und technischen Ungenauigkeiten.
  Diese Probleme werden in der Regel von Lesern der MDN Web Docs entdeckt.
- **Korrekturen von Inhaltsfehlern**, die in der Regel von Freiwilligen durchgeführt werden, um [Probleme im `mdn/content`-Repository](https://github.com/mdn/content/issues) zu beheben.

Unabhängig davon, wie Inhaltsänderungen vorgenommen werden, werden sie als Pull-Requests auf GitHub eingereicht.
Die Inhaltsänderungen durchlaufen die folgenden Phasen, bevor sie auf den MDN Web Docs veröffentlicht werden:

1. **Einreichen von Änderungen:** Als Autor eines Pull-Requests reichen Sie Änderungen ein, indem Sie einen Pull-Request öffnen.
   Weitere Informationen zu unseren Prozessen finden Sie in den Abschnitten [Bevor Sie beginnen](#bevor_sie_beginnen), [Einen Pull-Request öffnen](#einen_pull-request_öffnen) und [Nachdem Sie einen Pull-Request geöffnet haben](#nachdem_sie_einen_pull-request_geöffnet_haben).
2. **Überprüfung von Änderungen:** Ihre Änderungen werden von Mitgliedern und Freiwilligen der MDN überprüft.
   Weitere Details finden Sie im Abschnitt [Prozess der Pull-Request-Überprüfung](#prozess_der_pull-request-überprüfung).
3. **Anzeige veröffentlichter Änderungen:** Inhalte, die auf `mdn/content` aktualisiert wurden, gehen innerhalb eines Tages nach dem Zusammenführen durch einen regelmäßigen Neuaufbau der Seite, der alle 24 Stunden erfolgt, online.

## Einreichen von Änderungen

### Werte und Teilnahme

Wir möchten, dass MDN Web Docs eine einladende, freundliche Gemeinschaft ist, auf die wir alle stolz sein können.
Alle Teilnehmer müssen unseren [Verhaltenskodex](https://github.com/mdn/content/blob/main/CODE_OF_CONDUCT.md) befolgen, was bedeutet, sich an [Mozillas Richtlinien zur Community-Teilnahme](https://www.mozilla.org/en-US/about/governance/policies/participation/) zu halten.
Seien Sie höflich und konstruktiv, wenn Sie Pull-Requests öffnen, Überprüfungskommentare schreiben und mit dem Autor des Pull-Requests oder anderen Mitgliedern der Community interagieren.
Wenn Sie oder jemand anderes ein potenziell illegales Verhalten erlebt haben oder sich unsicher, unwillkommen oder unwohl fühlen, ermutigen wir Sie, [es zu melden](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/).

### Bevor Sie beginnen

Bevor Sie mit der Arbeit an MDN beginnen, gehen Sie bitte die nachstehenden Empfehlungen und Richtlinien durch.

**Pull-Requests müssen ein bestehendes Problem lösen oder teilweise beheben.**
Der Grund für diese Einschränkung ist, zu vermeiden, dass Sie mit einer Aufgabe beginnen, an der möglicherweise schon jemand arbeitet.
Suchen Sie in den Problemen und Pull-Requests im [MDN-Repository](https://github.com/orgs/mdn/repositories), zu dem Sie beitragen möchten, und stellen Sie sicher, dass die Arbeit, die Sie beginnen wollen, nicht bereits in Arbeit ist.
Wenn Sie einen Beitrag zum MDN-Projekt leisten möchten, finden Sie sich in einer der folgenden Situationen wieder:

- **Wenn Sie einen Beitrag zum Projekt leisten möchten**, können Sie Aufgaben unter „Issues“ in jedem der [MDN GitHub-Repositorys](https://github.com/orgs/mdn/repositories) finden (zum Beispiel [`mdn/content`-Issues](https://github.com/mdn/content/issues)) und unsere [öffentlichen GitHub-Projektboards](https://github.com/orgs/mdn/projects).
  Stellen Sie sicher, dass das Issue nicht jemandem zugewiesen ist und noch niemand einen Pull-Request für die Aufgabe geöffnet hat.
  Issues mit dem Label `good first issue` sind ein guter Ausgangspunkt.

- **Wenn Sie ein Problem auf MDN gefunden haben**, sollten Sie zunächst ein Issue öffnen.
  **Issues benötigen eine Antwort von den Betreuern, bevor Sie mit der Arbeit beginnen**, damit Sie wissen, dass ein Problem, das durch einen Pull-Request behandelt wird, gültig ist und Ihr Pull-Request akzeptiert wird.
  Weitere Informationen zu Issues finden Sie auf unseren [Community-Seiten für GitHub-Issues](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Wenn Sie neue Inhalte oder ein neues Feature vorschlagen möchten**, reichen Sie einen Vorschlag über die Vorlage „Neuer Inhalt oder Feature-Vorschlag“ [GitHub-Issue-Vorlage](https://github.com/mdn/mdn/issues/new/choose) ein.

Wenn Sie nicht sicher sind, wo Sie beginnen sollen, nehmen Sie Kontakt mit uns auf [dem Discord-Server](/discord) auf und bitten Sie um Feedback.

### Einen Pull-Request öffnen

Wenn Sie bereit sind, einen Pull-Request zu öffnen, befolgen Sie diese Richtlinien:

- **Pull-Requests sollten kurz und auf ein Problem fokussiert sein:** Wenn möglich, fassen Sie verwandte Änderungen in mehreren kleinen Pull-Requests zusammen.
  Wenn ein Pull-Request zu groß wird, kann der Prüfer ihn schließen und Sie bitten, Pull-Requests für jede logische Änderungseinheit einzureichen, die zusammengehören.
- **Fügen Sie eine Beschreibung der Änderungen hinzu:** Geben Sie so viel Kontext und Begründung für den Pull-Request wie möglich an.
- **Fügen Sie den Link zum Problem hinzu, das Sie schließen:** In der Pull-Request-Beschreibung fügen Sie „Fixes“ hinzu, wenn es das Problem vollständig löst, oder „Relates to“, wenn es sich um ein verwandtes Problem handelt.
  Weitere Informationen zum Verknüpfen von Issues in Pull-Requests finden Sie in den [GitHub-Dokumenten](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Fügen Sie 'depends on' hinzu** mit einem Link zu einer Abhängigkeit, wenn es Pull-Requests gibt, die zuerst zusammengeführt werden müssen (z. B. Codebeispiele in anderen Repositorys).
- **Begleiten Sie Codebeispieländerungen mit Inhaltsänderungen:** Dies ist wichtig, um sicherzustellen, dass aktualisierte Beispiele korrekt bereitgestellt werden.
  Wenn Sie Inhaltsänderungen vornehmen, die beeinflussen, wie Beispiele verwendet werden, sollten auch die zugehörigen Codebeispiele aktualisiert werden.
- **Fügen Sie einen Prüfer hinzu:** Sie können einen Prüfer hinzufügen, z. B. ein Teammitglied oder einen Themenverantwortlichen, wenn Sie bereits wissen, wer Ihren Pull-Request überprüfen sollte.
- **Machen Sie keine Änderungen nur an der Grammatik:**
  MDN Web Docs enthält technische Dokumentationen; Sie sollten keine stilistischen Prosaänderungen vorschlagen, es sei denn, die Grammatik ist fehlerhaft.
- **Fügen Sie keine Zeilenumbrüche unnötig hinzu oder entfernen Sie sie nicht** auf Seiten, die einem bestimmten Formatierungsstil folgen.

### Nachdem Sie einen Pull-Request geöffnet haben

- **Behandeln Sie CI-Fehler** von den automatisierten Tests, die als GitHub Actions ausgeführt werden (siehe `.github/workflows`).
  Wenn einer oder mehrere dieser Tests fehlschlagen, liegt es in Ihrer Verantwortung, zu versuchen, diese zu beheben.
  Wenn Sie nicht wissen, wie Sie die zugrunde liegenden Probleme lösen können, bitten Sie um Hilfe.
- **Lösen Sie Merge-Konflikte** mit dem Hauptbranch; Sie sind dafür verantwortlich, diese zu lösen.
  Sie können dies tun, indem Sie den `mdn/main` Branch in Ihren Branch mergen.
  Weitere Informationen finden Sie in der GitHub-Dokumentation zum [Aktualisieren Ihres Branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Seien Sie reaktionsschnell auf Feedback.**
  Das bedeutet, dass Sie bereit sein müssen, Änderungen am Pull-Request basierend auf der Überprüfung vorzunehmen.
  Wenn eine Überprüfung erfolgt und die Änderungen nicht vorgenommen werden, kann der Pull-Request geschlossen werden.
- **Seien Sie geduldig während des Überprüfungsprozesses.**
  Die MDN-Organisation erhält ein hohes Volumen an Pull-Requests und das Team benötigt möglicherweise Zeit, um Ihre Beiträge zu überprüfen.
- **Öffnen Sie keine geschlossenen Pull-Requests erneut.**
  Wenn Sie einen neuen Pull-Request erstellen müssen, kann dieser auf den geschlossenen verweisen.

## Prozess der Pull-Request-Überprüfung

Prüfer werden automatisch zugewiesen, wenn Sie einen Pull-Request basierend auf einer `CODEOWNERS`-Datei öffnen, aber wenn es eine bestimmte Person gibt, von der Sie eine Überprüfung anfordern möchten, können Sie [manuell eine Überprüfung anfordern](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review).
Wir verwenden auch Auto-Labeling bei Pull-Requests, um bei der Kategorisierung zu helfen.
Betreuer können Pull-Requests weiter kategorisieren und zusätzliche Labels wie `needs-info` oder `on-hold` hinzufügen, falls dies basierend auf dem Kontext erforderlich ist.

Wenn Sie einen Pull-Request überprüfen möchten, aber nicht als Prüfer aufgelistet sind, können Sie sich selbst als einen hinzufügen.
Es ist höflich, zuerst die vorhandenen Prüfer zu konsultieren, indem Sie in den Pull-Request kommentieren, dass Sie beabsichtigen, eine Überprüfung zu starten.

### Prüfer und Beauftragte

Das MDN Web Docs Team verwendet Prüfer und Beauftragte, um den Status von Pull-Requests zu verfolgen.

- **Prüfer** sind Personen, die die Änderungen im Pull-Request bewerten und dem Autor Feedback geben.
- **Beauftragte** sind Personen, die dafür verantwortlich sind, dass der Pull-Request nicht blockiert wird.
  Nicht alle Pull-Requests haben Beauftragte, aber wenn sie es tun, sind sie dafür verantwortlich, dass der Pull-Request voranschreitet.
  Ein Beauftragter hilft dabei, die Arbeit zu einem Abschluss zu bringen, sei es durch Zusammenführen, Schließen oder das Durchführen von Maßnahmen zur Entblockierung.

Ein Prüfer oder Beauftragter eines Pull-Requests ist dafür verantwortlich, die Änderungen zusammenzuführen.

Bevor Sie mit einer Überprüfung beginnen, überprüfen Sie die Pull-Request-Beschreibung, um sicherzustellen, dass keine bestimmte Person ihn überprüfen sollte.
Stellen Sie sicher, dass alle kontinuierlichen Integrationsaufgaben (CI-Aufgaben) erfolgreich abgeschlossen wurden und dass keine Merge-Konflikte bestehen.

Sollten Aufgaben fehlschlagen oder Merge-Konflikte bestehen, kommunizieren Sie dies dem Autor; es liegt in seiner Verantwortung, diese zu beheben.
Sie können den Autor als **Beauftragten** festlegen, um anzuzeigen, dass ein Pull-Request vor einer Überprüfung seiner Aufmerksamkeit bedarf.
Lassen Sie dem Autor die Möglichkeit, um Hilfe zu bitten, insbesondere neuen Mitwirkenden am Projekt.

### Überprüfung eines Pull-Requests

Was die Änderungen in einem Pull-Request betrifft, müssen die Inhalte und der Text dem [MDN-Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide) entsprechen und Beispielcode muss dem [Code-Stil-Leitfaden](/de/docs/MDN/Writing_guidelines/Code_style_guide) folgen.

Bei der Überprüfung eines Pull-Requests sollten Sie:

- **Einen Kommentar** zum Pull-Request hinzufügen, um den Autor wissen zu lassen, dass Sie den Pull-Request zur Kenntnis genommen haben und mit der Überprüfung beginnen werden.
  Dies soll verhindern, dass jemand anderes gleichzeitig unnötig beginnt, den Pull-Request zu überprüfen.
- **Den Prüfungsumfang auf die Änderungen im Pull-Request beschränken.**
  Öffnen Sie ein Folgeissue oder einen Pull-Request, um andere Verbesserungen anzugehen, die nicht vom Pull-Request abgedeckt werden.
- **Um Hilfe bitten** und das Label `review-help-needed` hinzufügen, wenn Sie technische Unterstützung bei der Überprüfung benötigen.
- **Pull-Requests mit nicht zusammenhängenden Änderungen schließen**, wenn sie zu komplex sind oder mehrere nicht verwandte Änderungen enthalten.
  In solchen Fällen bitten Sie den Autor des Pull-Requests, seine Änderungen in kleinere Teile aufzuteilen.
- **Ausgleichsbelastung anfordern**, wenn Ihre Aufgaben voll sind und Sie keine Kapazität für die Überprüfung haben.
  Taggen Sie das `@core-yari-content` Team und fragen Sie, ob jemand anderes einspringen kann.
- **Nicht zusammenführen, bevor 'depends on'-Pull-Requests zusammengeführt wurden.**
- **Keine Pull-Requests zusammenführen, die fehlschlagende Tests enthalten.**
  Es ist eine gute [Open-Source-Etikette](/de/docs/MDN/Community/Open_source_etiquette), den `main` Branch stabil zu halten, um Unterbrechungen für Mitwirkende, Betreuer und für automatisierte Prozesse zu vermeiden.
  Ein instabiler `main` Branch blockiert alle anderen Pull-Requests und macht es schwierig, andere Beiträge zu überprüfen und zusammenzuführen.
  Außerdem erhalten Mitwirkende, die Repositories beobachten, eine hohe Anzahl von Benachrichtigungen und unnötiges Rauschen, verursacht durch fehlschlagende Tests, kann frustrierend sein.
  Wenn Sie sich nicht sicher sind, wie Sie die fehlschlagenden Tests beheben sollen, [bitten Sie um Hilfe](/de/docs/MDN/Community/Communication_channels) oder weisen Sie den Pull-Request jemand anderem zu.

Wenn ein Pull-Request abgesehen von kleinen Tippfehlern oder anderen geringfügigen Problemen gut aussieht, möchten Sie das Problem möglicherweise direkt beheben.
Sie können dies tun, vorausgesetzt, der Pull-Request [wurde so eingerichtet, dass Änderungen zulässig sind](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).
Es wird empfohlen, [Kommentare mit Vorschlägen](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request) zum Beheben von kleinen Problemen zu verwenden, da diese gesammelt und in einem Schwung committet werden können.

Bei der Abgabe Ihrer Überprüfung haben Sie drei Möglichkeiten: **Genehmigen**, **Kommentieren** oder **Änderungen anfordern**.
In den folgenden Abschnitten wird erklärt, wann Sie welche Option verwenden sollten.

### Änderungen anfordern

Verwenden Sie die Option "Änderungen anfordern", wenn das Feedback, das Sie gegeben haben, _vom Autor behoben_ werden muss und vom Prüfer erneut überprüft werden muss, bevor der Pull-Request genehmigt und zusammengeführt werden kann.

#### Kommentieren

Verwenden Sie die Kommentarfunktion, wenn Ihr Feedback nicht entscheidend ist und keine erneute Überprüfung erfordert.
Kurz gesagt, Sie vertrauen dem Autor und anderen Prüfern, einen guten Urteilsvermögen zu haben.

#### Genehmigen

Verwenden Sie die Genehmigungsoption, wenn alles in Ordnung aussieht und aus Ihrer Sicht bereit ist, zusammengeführt zu werden.
Nach Abgabe Ihrer Überprüfung können Sie den Pull-Request sicher zusammenführen, wenn keine abweichenden Überprüfungskommentare von anderen Prüfern oder andere offene Kommentare vorliegen.

#### Was tun, wenn Sie feststecken

Wenn Sie eine Inhaltsänderung nicht verstehen oder sie zu groß und komplex ist, um damit fertig zu werden, geraten Sie nicht in Panik!
Ein guter Ausgangspunkt ist, Informationen vom Autor des Pull-Requests anzufordern, um Ihnen zu helfen.

Es ist selten, dass Sie ohne Vorwarnung eine große, komplexe Inhaltsänderung überprüfen müssen.
Sollte dies jedoch passieren, sollte die Beschreibung des Pull-Requests auf ein Problem verlinken, das die Hintergrundinformationen erklärt.

Wenn Sie immer noch nicht sicher sind oder der Meinung sind, dass der Inhalt verdächtig ist, wenden Sie sich an das MDN Web Docs Team und bitten Sie um Hilfe.

### Richtlinien für Bearbeitungszeiten für Autoren und Prüfer

In diesem Abschnitt sind die erwarteten Bearbeitungszeiten beim Beantworten von Überprüfungskommentaren aufgeführt, wenn Sie ein Pull-Request-Autor sind, und beim Überprüfen von Pull-Requests, wenn Sie ein Prüfer sind.

- **Überprüfen:**
  Der Pull-Request-Prüfer sollte in der Lage sein, die Änderungen in 2 Wochen oder weniger zu überprüfen.
  In den 2 Wochen, nachdem ein Pull-Request geöffnet wird, kann der Prüfer:
  - Einen Kommentar hinterlassen, wann er mit der Überprüfung des Pull-Requests beginnen kann
  - Um technische oder ressourcenbezogene Hilfe bitten
- **Anforderungen für die Durchführung von Änderungen:**
  Der Autor des Pull-Requests sollte in der Lage sein, die Kommentare in 4 Wochen oder weniger zu beantworten oder zu beheben.
  Wenn der Autor des Pull-Requests in dieser Zeit nicht in der Lage ist, die Überprüfungskommentare zu beantworten oder zu beheben, kann der Prüfer eine der folgenden Maßnahmen ergreifen:
  - Die Änderungen durchführen und den Pull-Request zusammenführen
  - Den Pull-Request schließen

### Externe Prüfer

Einige Pull-Requests im MDN-Content-Repo beziehen sich auf spezifische Arbeiten von Browserherstellern oder Organisationen mit definierten Autoren und Prüfern.
In diesen Fällen wird der Autor den Benutzernamen des Prüfers in einer Zeile am Ende der Pull-Request-Beschreibung angeben, zum Beispiel:

```md
reviewer: @jpmedley
```

Wenn Sie eine Überprüfungsanfrage erhalten und mit einem anderen Prüfer, wie oben beschrieben, überschrieben wurden, überprüfen Sie die Änderungen nicht.
Sobald der im Beschreibungstext erwähnte Prüfer die Änderungen genehmigt hat, wird er um eine Genehmigung durch die `CODEOWNERS` bitten.

## Leseliste

Überprüfer werden ermutigt, die folgenden Artikel zu lesen, um bei häufigen Aufgaben Unterstützung zu erhalten:

- [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/) erklärt, wie man einen unfertigen oder abgelehnten Pull-Request schließt
- [Kindness and Code Reviews: Improving the Way We Give Feedback](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) gibt nützliche Hinweise zum Feedback geben
- [Code Review Guidelines for the Reviewer](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) bietet Beispiele für gutes und schlechtes Feedback
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) auf google.github.io/eng-practices
