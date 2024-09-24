---
title: Kriterien für die Aufnahme in MDN Web Docs
slug: MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel beschreibt ausführlich die Kriterien für die Aufnahme von Inhalten in MDN Web Docs, den Anwendungsprozess zur Aufnahme neuer Dokumentationen sowie Erwartungen und Richtlinien für eine Partei, die einen Antrag stellt.

Dies richtet sich an größere Projekte. Um eine neue Seite oder einen Artikel vorzuschlagen, lesen Sie bitte den Abschnitt [Vorschlagen von Inhalten](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) auf der Seite "Was wir schreiben".

## Webstandard-Technologien

Der Auftrag von MDN Web Docs ist es, Webstandard-Technologien zu dokumentieren, die in einer Spezifikation einer zuverlässigen Standardisierungsorganisation veröffentlicht sind und die in mindestens einem stabilen Browser unterstützt werden. Diese Kriterien signalisieren ausreichendes Interesse, Stabilität und die „Absicht zur Implementierung“ seitens der Webindustrie im Allgemeinen. Daher glauben wir, dass diese Technologien eine sichere Sache sind, damit wir unsere Zeit und unseren Aufwand in die Dokumentation investieren. Früher könnte eine Webtechnologie oder ein Feature gefährdet sein, abgebrochen zu werden, wenn kein Interesse besteht, oder so instabil sein, dass es sich erheblich ändern könnte, was unnötig viele Umschreibungen erfordert (die wir, wo möglich, vermeiden möchten).

## Nicht-Webstandard-Technologien

Nicht-Webstandard-Technologien sind Technologien, die nicht unseren oben zusammengefassten Kriterien folgen. Normalerweise würden wir sie nicht für die Dokumentation auf MDN Web Docs in Betracht ziehen.

Unser Leitbild ist „Entwicklern die Informationen bereitzustellen, die sie benötigen, um Projekte auf dem offenen Web einfach zu realisieren.“ Dies legt nahe, dass wir in Betracht ziehen sollten, Technologien zu dokumentieren, die für Webentwickler nützlich sind, auch wenn sie keine offenen Webstandards sind oder sich nicht auf dem Standardpfad befinden usw.

Wenn Sie eine Nicht-Webstandard-Technologie für die Aufnahme in MDN Web Docs in Betracht ziehen möchten, stellen Sie sicher, dass sie den unten genannten Kriterien entspricht.

## Kriterien für die Aufnahme in MDN Web Docs

Technologien sollten die hier beschriebenen Kriterien erfüllen, um für eine Dokumentation auf MDN Web Docs in Betracht gezogen zu werden.

### Offen und nicht proprietär sein

Bei MDN Web Docs unterstützen wir offene Technologien. Wir unterstützen keine geschlossenen Technologieökosysteme, die von einem einzigen Unternehmen kontrolliert werden, die nicht für Beiträge von interessierten Parteien offen sind und die nicht plattformübergreifend interoperabel sind. Wir glauben, dass Technologie besser für alle funktioniert, wenn sie offen entwickelt wird.

### Web-exponiert sein und mit Webtechnologien in Zusammenhang stehen

Unser zentraler Auftrag sind Webstandard-Technologien; es ergibt keinen Sinn, Technologien zu dokumentieren, die nicht mit dem Web in Verbindung stehen oder für Webentwickler interessant sind.

### Zeichen von Interesse und Akzeptanz zeigen

Wir wollen nicht unsere Zeit mit der Dokumentation einer Technologie verbringen, die kein Signal von Interesse und Akzeptanz aus der Industrie zeigt. Es könnte einfach sein, dass es zu früh ist, die Technologie zu dokumentieren, und wir könnten sie in Zukunft in Betracht ziehen, sie auf MDN Web Docs zu dokumentieren.

### Keine Zeichen einer Einstufung als veraltet oder ersetzt zeigen

In Bezug auf den obigen Punkt wollen wir auch nicht unsere Zeit mit der Dokumentation einer Technologie verbringen, die sich in einem späten Stadium ihres Lebenszyklus befindet und bereits Anzeichen eines Rückgangs des Interesses zeigt.

### Keine bestehende Dokumentationsressource an anderer Stelle haben

Es gibt viele Bibliotheken und Frameworks, die keine Webstandards sind, aber auf Webtechnologien basieren und in der Webindustrie sehr beliebt sind. Wir dokumentieren keines davon, weil sie im Allgemeinen alle bereits über etablierte Dokumentationsressourcen verfügen. Es wäre unklug, mit der offiziellen Ressource eines beliebten Frameworks zu konkurrieren – das wäre eine Zeitverschwendung und würde wahrscheinlich dazu führen, dass Entwickler verwirrt werden, die versuchen, die Technologie zu erlernen.

### Eine Gemeinschaft haben, die bereit ist, die Dokumentation zu schreiben und zu pflegen

Das MDN Web Docs-Team konzentriert sich auf die Dokumentation der offenen Webplattform. Wenn Sie möchten, dass eine Technologie in diesem Bereich auf MDN Web Docs dokumentiert wird, müssen Sie eine Gemeinschaft zusammenstellen, die bereit ist, die Dokumentation zu schreiben und nach der Fertigstellung zu pflegen. Unser Team ist in solchen Fällen gerne bereit, Anleitungen zu geben, einschließlich Bearbeitungen und Feedback, aber wir haben keine Ressourcen für mehr als das.

> [!NOTE]
> Die Arbeit an MDN Web Docs erfolgt auf GitHub und 'in der Öffentlichkeit'. Ihr Team sollte mit Git & GitHub versiert sein und sich mit der Arbeit im Open Source-Bereich wohlfühlen.

## Prozess zur Auswahl der neuen Technologie

Wenn eine Technologie ein guter Kandidat für die Dokumentation auf MDN Web Docs zu sein scheint, können Sie eine Diskussion in den [GitHub-Community-Diskussionen](/de/docs/MDN/Community/Communication_channels#github_discussions) starten, um die Aufnahme dieser Technologie vorzuschlagen und zu diskutieren. Dieser Abschnitt beschreibt, was der Vorschlag enthalten sollte.

### Einreichung des Vorschlags

Technologien werden fallweise für die Aufnahme in MDN Web Docs in Betracht gezogen. Für eine Berücksichtigung müssten Sie einen Vorschlag mit dem Titel „Vorschlag zur Dokumentation einer neuen Technologie auf MDN Web Docs“ einreichen. Wir benötigen von Ihnen im Vorschlag folgende Informationen:

- Die Technologie, ihr Hauptzweck/Nutzungsfälle und die Zielgruppe der Entwickler.
- Welche Art von Branchen- oder Community-Buzz gibt es rund um die Technologie?
  - Nutzen viele Webentwickler es? Wie ist die Akzeptanz in der Industrie?
  - Wollen oder benötigen viele Webentwickler diese Informationen?
  - Wie groß ist die Zielgruppe für diese Informationen? Unterstützende Statistiken wären hilfreich, wenn Sie sie haben.
- Wie steht die Technologie in Beziehung zu Kernwebtechnologien und Webbrowsern? Nützliche Details beinhalten:
  - Wird HTML und CSS genutzt, aber generell nicht ins Web ausgegeben?
  - Wird es in Webbrowsern über ein Polyfill unterstützt?
- Welche Dokumentation oder Ressourcen sind bereits verfügbar, die die Technologie abdecken?
- Wie viel Dokumentation müsste zu MDN Web Docs hinzugefügt werden?
  - Listen Sie die erwartete Anzahl von Anleitungen, Tutorials, Referenzseiten für Elemente/Methoden/Attribute usw. auf.
  - Bieten Sie ein Inhaltsverzeichnis auf hoher Ebene an.
  - Erwähnen Sie die Art von „fortgeschrittenen“ Funktionen, die Sie für diese Ressource benötigen könnten, über die grundlegenden Dokumentationsseiten hinaus. Erwarten Sie, eingebettete Videos, interaktive Codebeispiele usw. einzufügen?
- Wer wird die Dokumentation schreiben? Wer sind sie und warum sind sie für die Aufgabe geeignet?
- Wie wird die Dokumentation gepflegt?

Sie müssen uns an dieser Stelle keine hunderte Seiten mit Details zur Verfügung stellen (tatsächlich wäre es uns lieber, wenn Sie es nicht tun würden). Ein paar Absätze zu jedem der obigen Punkte sind mehr als ausreichend.

> [!NOTE]
> MDN Web Docs ist primär eine englische Seite (en-US). Die Hauptsprache für Ihr Projekt sollte US-Englisch sein.

### Erwartete Antwort

Wir werden die Technologie und die Informationen, die Sie im Vorschlag einreichen, überprüfen und mit einer der folgenden Antworten reagieren:

- **Nein**: Wir glauben nicht, dass dies die Kriterien für die Dokumentation auf MDN Web Docs erfüllt.
- **Vielleicht**: Wir sind uns nicht sicher, ob es sich für die Dokumentation auf MDN Web Docs eignet und möchten einige weitere Fragen stellen.
- **Ja**: Wir glauben, dass es geeignet ist, es auf MDN Web Docs aufzunehmen.

Wenn die Technologie ein guter Kandidat ist, wird das Team Ihnen dabei helfen, mit der Dokumentation zu beginnen.

## Projektleitlinien zur Dokumentation der neuen Technologie

Wenn Ihre gewählte Technologie zur Dokumentation auf MDN Web Docs akzeptiert wird, ist der nächste Schritt der Beginn.

Um sicherzustellen, dass Ihr Projekt zur Dokumentation der neuen Technologie auf MDN Web Docs erfolgreich ist, benötigen wir von Ihnen Folgendes:

- Ein engagiertes Team
- Einen Projektplan und eine Roadmap
- Schreibrichtlinien und Standards
- Eine intuitive Dokumentationsstruktur
- Einen Wartungsplan

### Engagiertes Team

Stellen Sie sicher, dass Sie ein engagiertes Team haben, das sowohl die anfängliche Dokumentation schreibt als auch sie in Zukunft mit den erforderlichen Updates pflegt.

Überlegen Sie, wie viel Arbeit es gibt und wie viele Personen Sie dafür benötigen könnten.

- Wenn es sich um ein großes Projekt handelt, könnte es von Vorteil sein, einige Autoren, einen technischen Prüfer, um sicherzustellen, dass die Arbeit technisch korrekt ist, einen Korrekturleser, um die Sprache zu optimieren, jemanden, der Codebeispiele schreibt, usw. zu haben.
- Bei einem kleineren Projekt könnten ein oder zwei Personen mehrere Rollen übernehmen. Wie Sie das Team aufbauen möchten, bleibt Ihnen überlassen, solange es für Sie funktioniert.

Ein Mitglied des MDN Web Docs-Teams wird Ihrem Projekt zugewiesen, um auf der MDN Web Docs-Seite Anleitung zu bieten.

Sie sollten ein (oder zwei) Teamleiter ernennen, die den Kontakt mit dem Mitglied des MDN Web Docs-Teams aufrechterhalten können.

Der Vertreter von MDN Web Docs hilft dabei, die erforderlichen Berechtigungen für alle Mitglieder Ihres Teams zu erhalten, um im [MDN-Organisation auf GitHub](https://github.com/mdn) arbeiten zu können.

### Projektplan und Roadmap

Erstellen Sie einen Plan für das Projekt – Aufgaben, geschätzte Fertigstellungstermine und Meilensteine, die Sie verfolgen möchten, um sicherzustellen, dass Sie stetige Fortschritte machen.

Wenn das Projekt groß ist, sollten Sie erwägen, eines Ihrer Teammitglieder als Projektmanager zu ernennen. Sie sollten auch überlegen, einen Teilprojektplan für eine Erstveröffentlichung zu schreiben, die das Mindestmaß an nützlicher Dokumentation umfasst (ein _Minimal Viable Product_); Sie können später weitere Ergänzungen vornehmen.

Wenn das Dokumentationsprojekt klein ist, sollten Sie dennoch festhalten, was getan wurde und was nicht, in welchem Stadium sich jeder Teil der Dokumentation befindet (z.B. nicht gestartet, in Bearbeitung, Entwurf geschrieben, geprüft, fertig) und wer woran arbeitet.

### Schreibrichtlinien und Standards

Diese [Richtlinien](/de/docs/MDN/Writing_guidelines) geben an, wie wir erwarten, dass Dokumente für MDN Web Docs geschrieben werden.

Wenn Sie zusätzliche Richtlinien für die Dokumente haben, die Sie schreiben, erwarten wir, dass dieser Leitfaden hinzugefügt und aktuell gehalten wird.

In Bezug auf Standards sollten Sie ein angemessenes Maß an Schreibqualität aufrechterhalten, damit Ihre Dokumentation auf MDN Web Docs bleibt. Ihr Vertreter von MDN Web Docs wird mit Ihnen arbeiten, um deutlich zu machen, was erwartet wird.

### Intuitive Dokumentationsstruktur

Wenn Sie den Vorschlags-Einreichungsprozess durchlaufen haben, sollten Sie bereits eine grobe Gliederung dessen haben, was Sie für diese Technologie schreiben werden. An diesem Punkt sollten Sie dies in einen Website-Strukturplan verfeinern: überlegen Sie, wie die Dokumentenhierarchie aussehen wird und wo alles zusammenpasst und verlinkt wird.

Jedes Projekt ist anders, aber wir würden ungefähr Folgendes empfehlen:

```plain
Landing Page
|
------Referenz
      |
      --------Elemente
      |
      --------Methoden
      |
      --------Andere Referenzseitentyp(en)?
|
------Anleitungen/Tutorials
|
------Beispiele
```

Jeder Seitentyp, den Sie in Ihrem Projekt verwenden werden, sollte eine Seitenvorlage haben, um anderen das Kopieren der Struktur zu erleichtern. Sie sollten diese frühzeitig festlegen.

Bitte lesen Sie unseren Abschnitt über [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Wenn Ergänzungen benötigt werden, setzen Sie sich bitte mit Ihrem Vertreter von MDN Web Docs in Verbindung.

### Wartungsplan

Die Dokumentation für diese Technologie muss gepflegt werden, um auf MDN Web Docs zu bleiben:

- Der Inhalt und die Dateien für MDN Web Docs werden auf GitHub gespeichert. Wenn andere Änderungen an der Dokumentation für Ihre Technologie vornehmen, muss ein Mitglied Ihres Teams diese Änderungen überprüfen, um sicherzustellen, dass der Inhalt weiterhin gut ist. Sie können die offenen Pull-Requests (PRs) über die Benachrichtigungsfunktion von GitHub verfolgen.
- Wenn sich Änderungen an der Technologie ergeben, die eine Aktualisierung der Dokumentation erforderlich machen, muss Ihr Team entsprechende Updates vornehmen, die denselben Standards wie die ursprüngliche Dokumentation entsprechen.

Wenn über einen Zeitraum von sechs Monaten keine positiven Änderungen beobachtet werden und die Dokumentation in einem der folgenden Zustände erscheint:

- Veraltet oder nicht gepflegt
- Stecken geblieben, ohne fertiggestellt worden zu sein
- Niedrige Qualität
- Veraltet werdend

Dann wird die Dokumentation für diese Technologie als tot angesehen. Nach einer Diskussion zwischen Ihrem Team und dem Vertreter des MDN Web Docs-Teams wird die Dokumentation entfernt.

Wir hoffen, Sie verstehen, dass wir in solchen Angelegenheiten streng sein müssen – wir können nicht zulassen, dass die Seite mit schlechter Qualität, unvollständiger oder veralteter Dokumentation gefüllt wird.
