---
title: Kriterien zur Aufnahme in die MDN Web Docs
slug: MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel beschreibt ausführlich die Kriterien für die Aufnahme von Inhalten in die MDN Web Docs, den Bewerbungsprozess für die Aufnahme neuer Dokumentationen sowie die Erwartungen und Richtlinien für eine Partei, die sich bewirbt.

Dies richtet sich an größere Projekte. Um eine neue Seite oder einen Artikel vorzuschlagen, verweisen Sie bitte auf den Abschnitt [Inhalte vorschlagen](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) auf der Seite "Was wir schreiben".

## Webstandard-Technologien

Der Auftrag der MDN Web Docs besteht darin, Webstandard-Technologien zu dokumentieren, die in einer Spezifikation veröffentlicht wurden, die von einem zuverlässigen Standardisierungsgremium stammt und die in mindestens einem stabilen Browser unterstützt werden. Diese Kriterien signalisieren genügend Interesse, Stabilität und "Umsetzungsabsicht" durch die Webindustrie im Allgemeinen. Daher halten wir diese Technologien für eine sichere Investition, um unsere Zeit und Mühe in ihre Dokumentation zu stecken. Eine Webtechnologie oder ein Feature könnte früher anfällig für die Einstellung aufgrund mangelnden Interesses sein oder könnte so instabil sein, dass sie sich erheblich ändert, was unnötig viel Umschreibung verursachen würde (was wir, wo möglich, vermeiden wollen).

## Nicht-Webstandard-Technologien

Nicht-Webstandard-Technologien sind Technologien, die nicht unseren oben zusammengefassten Kriterien folgen. Normalerweise würden wir sie nicht für die Dokumentation in den MDN Web Docs in Betracht ziehen.

Unser Leitsatz lautet: _"Entwicklern die Informationen bereitzustellen, die sie benötigen, um Projekte im offenen Web einfach zu erstellen"_. Dies legt nahe, dass wir in Betracht ziehen sollten, Technologien zu dokumentieren, die für Webentwickler nützlich sind, auch wenn sie keine offenen Webstandards sind, sich auf dem Standardisierungsweg befinden usw.

Wenn Sie eine nicht-Webstandard-Technologie für die Aufnahme in die MDN Web Docs in Betracht ziehen möchten, sollten Sie sicherstellen, dass sie den unten aufgeführten Kriterien entspricht.

## Kriterien für die Aufnahme in die MDN Web Docs

Technologien sollten die hier beschriebenen Kriterien erfüllen, um für eine Dokumentation in den MDN Web Docs in Betracht gezogen zu werden.

### Offen und nicht proprietär sein

Bei den MDN Web Docs unterstützen wir offene Technologien. Wir unterstützen keine geschlossenen Technologie-Ökosysteme, die von einem einzigen Unternehmen kontrolliert werden, die nicht offen für Beiträge von interessierten Parteien sind und die nicht interoperabel auf mehreren Plattformen und Systemen funktionieren. Wir glauben, dass Technologie für alle besser funktioniert, wenn sie offen entwickelt wird.

### Web-exponiert sein und mit Webtechnologien in Verbindung stehen

Unser zentraler Auftrag sind Webstandard-Technologien; es ergibt keinen Sinn, Technologien zu dokumentieren, die nicht mit dem Web in Verbindung stehen oder kein Interesse für Webentwickler haben.

### Zeichen von Interesse und Akzeptanz zeigen

Wir möchten unsere Zeit nicht damit verbringen, eine Technologie zu dokumentieren, die kein Signal von Interesse und Akzeptanz in der Industrie zeigt. Es kann einfach zu früh sein, die Technologie zu dokumentieren, und wir könnten in der Zukunft die Aufnahme in die MDN Web Docs in Betracht ziehen.

### Keine Anzeichen von Veralterung oder Ablösung zeigen

Im Zusammenhang mit dem oben genannten Punkt möchten wir auch nicht unsere Zeit damit verbringen, eine Technologie zu dokumentieren, die sich in einer späten Phase ihres Lebenszyklus befindet und bereits Anzeichen von zurückgehendem Interesse zeigt.

### Keine etablierte Dokumentationsressource an anderer Stelle haben

Es gibt viele Bibliotheken und Frameworks, die keine Webstandards sind, aber auf Webtechnologien basieren und in der Webindustrie sehr beliebt sind. Wir dokumentieren keine dieser, weil sie im Allgemeinen bereits etablierte Dokumentationsressourcen haben. Es wäre unklug, mit der offiziellen Ressource eines populären Frameworks zu konkurrieren – das wäre eine Zeitverschwendung und würde wahrscheinlich Entwickler, die die Technologie lernen möchten, verwirren.

### Eine Gemeinschaft haben, die bereit ist, die Dokumentation zu schreiben und zu pflegen

Das MDN Web Docs-Team konzentriert sich auf die Dokumentation der offenen Webplattform. Wenn Sie möchten, dass eine Technologie in diesem Bereich für die Dokumentation in den MDN Web Docs in Betracht gezogen wird, müssen Sie eine Gemeinschaft haben, die bereit ist, die Dokumentation zu schreiben und nach Fertigstellung zu pflegen. Unser Team gibt in solchen Fällen gerne Anweisungen, einschließlich Bearbeitungen und Feedback, aber wir haben nicht die Ressourcen für mehr als das.

> [!NOTE]
> Die Arbeit an den MDN Web Docs wird auf GitHub und 'im offenen' durchgeführt. Ihr Team sollte mit git und GitHub vertraut sein und sich wohlfühlen, in Open Source zu arbeiten.

## Prozess zur Auswahl der neuen Technologie

Wenn eine Technologie ein guter Kandidat für die Dokumentation in den MDN Web Docs ist, können Sie eine Diskussion in den [GitHub-Community-Diskussionen](/de/docs/MDN/Community/Communication_channels#github_discussions) beginnen, um die Aufnahme dieser Technologie zu vorschlagen und zu diskutieren. Dieser Abschnitt beschreibt, was das Vorschlagspaket enthalten sollte.

### Einreichen des Vorschlags

Technologien werden für die Aufnahme in die MDN Web Docs von Fall zu Fall geprüft. Für eine Überlegung müssen Sie einen Vorschlag mit dem Titel "Vorschlag zur Dokumentation einer neuen Technologie in den MDN Web Docs" einreichen. Wir würden die folgenden Informationen von Ihnen im Vorschlag benötigen:

- Die Technologie, ihr Kernzweck/Nutzungsfälle und die Zielgruppe der Entwickler.
- Welches Branchen- oder Community-Interesse gibt es an der Technologie?
  - Nutzen viele Webentwickler sie? Wie sieht die Akzeptanz in der Branche aus?
  - Möchten oder benötigen viele Webentwickler diese Informationen?
  - Wie groß ist die Zielgruppe für diese Informationen? Unterstützende Statistiken wären hilfreich, wenn Sie sie haben.
- Wie steht die Technologie in Verbindung mit wesentlichen Webtechnologien und Webbrowsern? Nützliche Details umfassen:
  - Nutzt sie HTML und CSS, gibt jedoch im Allgemeinen nicht an das Web aus?
  - Wird sie in Webbrowsern durch einen Polyfill unterstützt?
- Welche Dokumentationen oder Ressourcen gibt es bereits, die die Technologie abdecken?
- Wie viel Dokumentation müsste den MDN Web Docs hinzugefügt werden?
  - Listen Sie die erwartete Anzahl von Leitfäden, Tutorials, Referenzseiten für Elemente/Methoden/Attribute usw. auf.
  - Stellen Sie ein Inhaltsverzeichnis auf hohem Niveau bereit.
  - Erwähnen Sie die Art von "fortgeschrittenen" Funktionen, die Sie für diese Ressource benötigen könnten, über die grundlegenden Dokumentationsseiten hinaus. Erwarten Sie, eingebettete Videos, interaktive Codebeispiele usw. einzufügen?
- Wer wird die Dokumentation schreiben? Wer sind sie und warum sind sie für die Aufgabe geeignet?
- Wie wird die Dokumentation gepflegt?

Sie müssen uns an diesem Punkt keine Hunderten von Seiten an Details liefern (tatsächlich wäre uns lieber, wenn Sie das nicht tun würden). Ein paar Absätze zu jedem der oben genannten Punkte sind mehr als ausreichend.

> [!NOTE]
> MDN Web Docs ist in erster Linie eine englische Website (en-US). Die Hauptsprache Ihres Projekts sollte US-Englisch sein.

### Auf eine Antwort warten

Wir werden die Technologie und die Informationen, die Sie im Vorschlag einreichen, prüfen und mit einer der folgenden Antworten antworten:

- **Nein**: Wir halten dies nicht für geeignet, um in den MDN Web Docs dokumentiert zu werden.
- **Vielleicht**: Wir sind uns nicht sicher, ob es für die Dokumentation in den MDN Web Docs geeignet ist und würden gerne einige weitere Fragen stellen.
- **Ja**: Wir halten es für geeignet, es in die MDN Web Docs aufzunehmen.

Wenn die Technologie ein guter Kandidat ist, wird das Team Ihnen helfen, mit der Dokumentation zu beginnen.

## Projektrichtlinien zur Dokumentation der neuen Technologie

Wenn Ihre gewählte Technologie für die Dokumentation in den MDN Web Docs akzeptiert wird, ist der nächste Schritt, zu beginnen.

Um sicherzustellen, dass Ihr Projekt zur Dokumentation der neuen Technologie in den MDN Web Docs erfolgreich ist, benötigen wir, dass Sie Folgendes bereithalten:

- Ein engagiertes Team
- Einen Projektplan und eine Roadmap
- Schreibrichtlinien und Standards
- Eine intuitive Dokumentationsstruktur
- Einen Pflegeplan

### Engagiertes Team

Stellen Sie sicher, dass Sie ein engagiertes Team haben, das sowohl die anfängliche Dokumentation schreiben als auch sie in Zukunft mit den erforderlichen Updates pflegen wird.

Denken Sie darüber nach, wie viel Arbeit es gibt und wie viele Leute Sie dafür brauchen könnten.

- Wenn es sich um ein großes Projekt handelt, könnte es vorteilhaft sein, ein paar Autoren zu haben, einen technischen Prüfer, um die technische Korrektheit der Arbeit zu überprüfen, einen Lektor, um die Sprache zu verbessern, jemanden, der Codebeispiele schreibt, usw.
- Bei einem kleineren Projekt könnten ein oder zwei Personen mehrere Rollen übernehmen. Wie auch immer Sie das Team aufbauen möchten, ist in Ordnung, solange es für Sie funktioniert.

Ein Mitglied des MDN Web Docs-Teams wird Ihrem Projekt zugewiesen, um Anweisungen zu den MDN Web Docs-Angelegenheiten zu geben.

Sie sollten ein oder zwei Teamleiter zuweisen, die mit dem Mitglied des MDN Web Docs-Teams zusammenarbeiten können.

Der Vertreter der MDN Web Docs hilft, die erforderlichen Berechtigungen für alle Mitglieder Ihres Teams zu erhalten, um in der [MDN-Organisation auf GitHub](https://github.com/mdn) zu arbeiten.

### Projektplan und Roadmap

Erstellen Sie einen Plan für das Projekt – Aufgaben, Schätzungen für Abschlussdaten und Meilensteine, die Sie verfolgen möchten, um sicherzustellen, dass Sie stetigen Fortschritt erzielen.

Wenn das Projekt groß ist, sollten Sie erwägen, einen Ihrer Teammitglieder als Projektmanager zuzuweisen. Sie sollten auch erwägen, einen Teilprojektplan für eine erste Veröffentlichung zu schreiben, der das Minimum an nützlicher Dokumentation umfasst, das veröffentlicht werden kann (ein _Minimum Viable Product_); Sie können später weitere Ergänzungen hinzufügen.

Wenn das Dokumentationsprojekt klein ist, müssten Sie dennoch aufzeichnen, was erledigt wurde und was nicht, in welchem Stadium sich jeder Teil der Dokumentation befindet (z.B. nicht begonnen, in Bearbeitung, Entwurf geschrieben, überprüft, erledigt), und wer woran arbeitet.

### Schreibrichtlinien und Standards

Diese [Richtlinien](/de/docs/MDN/Writing_guidelines) beschreiben, wie wir erwarten, dass Dokumente für die MDN Web Docs geschrieben werden.

Wenn Sie zusätzliche Richtlinien für die Dokumente haben, die Sie schreiben, erwarten wir, dass diese Anleitung hinzugefügt und auf dem neuesten Stand gehalten wird.

In Bezug auf Standards wird erwartet, dass Sie ein angemessenes Maß an Schreibqualität in Ihrer Dokumentation beibehalten, damit sie bei den MDN Web Docs bleibt. Ihr MDN Web Docs-Vertreter wird mit Ihnen zusammenarbeiten, um Ihnen klar zu machen, was erwartet wird.

### Intuitive Dokumentationsstruktur

Wenn Sie den Vorschlagseinreichungsprozess durchlaufen haben, sollten Sie bereits eine grobe Gliederung dessen haben, was Sie für diese Technologie schreiben werden. An diesem Punkt sollten Sie dies in einen Strukturplan der Webseite verfeinern: Überlegen Sie, wie die Dokumenthierarchie aussehen wird und wo alles hineinpassen und verbunden sein wird.

Jedes Projekt ist anders, aber wir würden grob etwas in dieser Art empfehlen:

```plain
Landing page
|
------Reference
      |
      --------Elements
      |
      --------Methods
      |
      --------Other reference page type(s)?
|
------Guides/tutorials
|
------Examples
```

Jeder Seitentyp, den Sie in Ihrem Projekt verwenden werden, sollte eine Seitenvorlage haben, von der andere die Struktur übernehmen können. Sie sollten diese frühzeitig bestimmen.

Bitte beachten Sie unsere Sektion zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Wenn Ergänzungen nötig sind, sprechen Sie bitte mit Ihrem MDN Web Docs-Vertreter ab.

### Pflegeplan

Die Dokumentation für diese Technologie muss gepflegt werden, um in den MDN Web Docs zu verbleiben:

- Die Inhalte und Dateien für die MDN Web Docs werden auf GitHub gespeichert. Wenn andere Änderungen an der Dokumentation Ihrer Technologie vornehmen, muss ein Mitglied Ihres Teams diese Änderungen überprüfen, um sicherzustellen, dass die Inhalte weiterhin gut sind. Sie können die offenen Pull Requests (PRs) über die Benachrichtigungsfunktion von GitHub verfolgen.
- Wenn Änderungen an der Technologie auftreten, die eine Aktualisierung der Dokumentation erfordern, muss Ihr Team die entsprechenden Aktualisierungen vornehmen und dabei die gleichen Standards wie die ursprüngliche Dokumentation beibehalten.

Wenn über einen Zeitraum von sechs Monaten keine positiven Änderungen beobachtet werden und die Dokumentation in einem der folgenden Zustände erscheint:

- veraltet oder ungepflegt
- ins Stocken geraten, ohne abgeschlossen zu sein
- von niedriger Qualität
- im Begriff, obsolet zu werden

Dann wird die Dokumentation für diese Technologie als tot angesehen. Nach einer Diskussion zwischen Ihrem Team und dem Vertreter des MDN Web Docs-Teams wird die Dokumentation entfernt.

Wir hoffen, Sie verstehen, dass wir in solchen Angelegenheiten streng sein müssen — wir können nicht zulassen, dass die Seite mit schlechter Qualität, unvollständiger oder obsoleter Dokumentation gefüllt wird.
