---
title: Kriterien für die Aufnahme in die MDN Web Docs
slug: MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel beschreibt detailliert die Kriterien für die Aufnahme von Inhalten in die MDN Web Docs, den Antragsprozess zur Aufnahme neuer Dokumentationen und die Erwartungen und Richtlinien für eine antragstellende Partei.

Dies richtet sich an größere Projekte. Um eine neue Seite oder einen Artikel vorzuschlagen, lesen Sie bitte den Abschnitt [Inhalte vorschlagen](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) auf der Seite "Was wir schreiben".

## Web-Standards-Technologien

Die Aufgabe der MDN Web Docs ist es, Web-Standards-Technologien zu dokumentieren, die in einer Spezifikation einer zuverlässigen Standardisierungsorganisation veröffentlicht und in mindestens einem stabilen Browser unterstützt werden. Diese Kriterien signalisieren ausreichendes Interesse, Stabilität und die "Absicht zur Implementierung" durch die Webindustrie im Allgemeinen. Daher glauben wir, dass diese Technologien eine sichere Investition unsererseits sind, Zeit und Mühe für die Dokumentation zu investieren. Früher als das könnte eine Webtechnologie oder ein Feature anfällig dafür sein, aufgrund mangelnden Interesses eingestellt zu werden, oder so instabil sein, dass es sich erheblich ändern könnte, was unnötigerweise viel Umschreiben erfordert (was wir nach Möglichkeit vermeiden möchten).

## Nicht-Web-Standards-Technologien

Nicht-Web-Standards-Technologien sind Technologien, die nicht unseren oben zusammengefassten Kriterien folgen. Normalerweise würden wir sie nicht für die Dokumentation auf den MDN Web Docs in Betracht ziehen.

Unsere Mission ist es, "Entwicklern die Informationen zu bieten, die sie benötigen, um Projekte im offenen Web einfach zu erstellen". Dies legt nahe, dass wir in Betracht ziehen sollten, Technologien zu dokumentieren, die für Webentwickler nützlich sind, auch wenn sie keine offenen Webstandards sind oder auf dem Standardisierungspfad liegen.

Wenn Sie erwägen, eine Nicht-Web-Standard-Technologie für die Aufnahme in die MDN Web Docs vorzuschlagen, sollten Sie sicherstellen, dass sie die unten aufgeführten Kriterien erfüllt.

## Kriterien für die Aufnahme in die MDN Web Docs

Technologien sollten die hier beschriebenen Kriterien erfüllen, um in Betracht gezogen zu werden, auf den MDN Web Docs dokumentiert zu werden.

### Offen und nicht proprietär sein

Bei den MDN Web Docs unterstützen wir offene Technologien. Wir unterstützen keine geschlossenen Technologie-Ökosysteme, die von einer einzigen Entität kontrolliert werden, nicht offen für Beiträge von jeder interessierten Partei sind und nicht plattform- und systemübergreifend interoperabel sind. Wir glauben, dass Technologie für alle besser funktioniert, wenn sie offen entwickelt wird.

### Web-bezogen und mit Web-Technologien verbunden sein

Unser Hauptauftrag sind Web-Standards-Technologien; es ergibt keinen Sinn, Technologien zu dokumentieren, die nicht mit dem Web in Verbindung stehen oder für Webentwickler von Interesse sind.

### Anzeichen von Interesse und Akzeptanz zeigen

Wir möchten unsere Zeit nicht mit der Dokumentation einer Technologie verbringen, die kein Signal von Interesse und Akzeptanz aus der Industrie zeigt. Es kann sein, dass es einfach zu früh ist, um mit der Dokumentation der Technologie zu beginnen, und wir könnten in Zukunft in Betracht ziehen, sie auf den MDN Web Docs zu dokumentieren.

### Keine Anzeichen von Veralterung oder Ersetzung zeigen

Im Zusammenhang mit dem obigen Punkt möchten wir auch nicht unsere Zeit damit verbringen, eine Technologie zu dokumentieren, die sich in einem späten Stadium ihres Lebenszyklus befindet und bereits Anzeichen von rückläufigem Interesse zeigt.

### Keine etablierte Dokumentationsressource an anderer Stelle haben

Es gibt viele Bibliotheken und Frameworks, die existieren, die keine Webstandards sind, aber auf Webtechnologien aufbauen und in der Webindustrie sehr beliebt sind. Wir dokumentieren keine davon, da sie im Allgemeinen alle bereits etablierte Dokumentationsressourcen haben. Es wäre unklug, mit der offiziellen Ressource eines beliebten Frameworks zu konkurrieren — dies wäre eine Zeitverschwendung und würde wahrscheinlich Entwickler verwirren, die die Technologie erlernen wollen.

### Eine Community haben, die bereit ist, die Dokumentation zu schreiben und zu pflegen

Das Team der MDN Web Docs konzentriert sich darauf, die offene Webplattform zu dokumentieren. Wenn Sie möchten, dass eine Technologie in diesem Bereich in Betracht gezogen wird, um auf den MDN Web Docs dokumentiert zu werden, müssen Sie eine Community haben, die bereit ist, die Dokumentation zu schreiben und nach Abschluss zu pflegen. Unser Team freut sich, in solchen Fällen Orientierung zu bieten, einschließlich Bearbeitungen und Rückmeldungen, aber wir haben nicht die Ressourcen für mehr als das.

> [!NOTE]
> Die Arbeit an den MDN Web Docs wird auf GitHub und 'im Offenen' durchgeführt. Ihr Team sollte mit Git & GitHub vertraut sein und komfortabel mit Open Source arbeiten können.

## Prozess zur Auswahl der neuen Technologie

Wenn eine Technologie ein guter Kandidat für die Dokumentation auf den MDN Web Docs zu sein scheint, können Sie eine Diskussion in den [GitHub-Community-Diskussionen](/de/docs/MDN/Community/Communication_channels#github_discussions) starten, um die Aufnahme dieser Technologie vorzuschlagen und zu diskutieren. Dieser Abschnitt beschreibt, was der Vorschlag beinhalten sollte.

### Einreichung des Vorschlags

Technologien werden für die Aufnahme in die MDN Web Docs von Fall zu Fall geprüft. Für die Prüfung müssten Sie einen Vorschlag mit dem Titel "Vorschlag zur Dokumentation einer neuen Technologie auf den MDN Web Docs" einreichen. Wir würden die folgenden Informationen von Ihnen im Vorschlag benötigen:

- Die Technologie, ihr Hauptzweck/Anwendungsfälle und die Zielgruppe der Entwickler.
- Welches Branchen- oder Community-Interesse gibt es rund um die Technologie?
  - Nutzen viele Webentwickler sie? Wie sieht die Branchenakzeptanz aus?
  - Wollen oder brauchen viele Webentwickler diese Informationen?
  - Wie groß ist die Zielgruppe für diese Informationen? Unterstützende Statistiken wären hilfreich, wenn Sie welche haben.
- Wie steht die Technologie in Bezug zur Kern-Web-Technologie und zu Web-Browsern? Nützliche Details sind:
  - Verwendet sie HTML und CSS, gibt aber generell nicht ins Web aus?
  - Wird sie in Web-Browsern über ein Polyfill unterstützt?
- Welche Dokumentationen oder Ressourcen sind bereits verfügbar, die die Technologie abdecken?
- Wie viel Dokumentation müsste den MDN Web Docs hinzugefügt werden?
  - Listen Sie die erwartete Anzahl an Leitfäden, Tutorials, Referenzseiten für Elemente/Methoden/Attribute usw. auf.
  - Geben Sie einen groben Inhaltsverzeichnisses an.
  - Erwähnen Sie die Art von "fortgeschrittenen" Features, die Sie für diese Ressource benötigen könnten, über die grundlegenden Dokumentationsseiten hinaus. Erwarten Sie, eingebettete Videos, interaktive Codebeispiele usw. zu inkludieren?
- Wer wird die Dokumentation schreiben? Wer sind sie, und warum sind sie für die Aufgabe geeignet?
- Wie wird die Dokumentation gepflegt?

Sie müssen uns zu diesem Zeitpunkt keine hundert Seiten Details zur Verfügung stellen (eigentlich wäre es uns lieber, wenn Sie das nicht täten). Ein paar Absätze zu jedem der obigen Punkte sind mehr als ausreichend.

> [!NOTE]
> MDN Web Docs ist primär eine englische Seite (en-US). Die Hauptsprache Ihres Projekts sollte US-Englisch sein.

### Auf eine Antwort warten

Wir werden die Technologie und die Informationen, die Sie im Vorschlag einreichen, prüfen und mit einer der folgenden Antworten antworten:

- **Nein**: Wir denken nicht, dass dies die Kriterien für die Dokumentation auf den MDN Web Docs erfüllt.
- **Vielleicht**: Wir sind uns nicht sicher, ob es geeignet ist und möchten einige weitere Fragen stellen.
- **Ja**: Wir denken, dass es angemessen ist, es in die MDN Web Docs aufzunehmen.

Wenn die Technologie ein guter Kandidat ist, wird das Team Ihnen helfen, mit der Dokumentation zu beginnen.

## Projektleitlinien für die Dokumentation der neuen Technologie

Wenn Ihre gewählte Technologie zur Dokumentation auf den MDN Web Docs akzeptiert wird, ist der nächste Schritt der Start.

Um sicherzustellen, dass Ihr Projekt zur Dokumentation der neuen Technologie auf den MDN Web Docs erfolgreich ist, müssen folgende Dinge gewährleistet sein:

- Ein dediziertes Team
- Ein Projektplan und eine Roadmap
- Schreibrichtlinien und Standards
- Eine intuitive Dokumentationsstruktur
- Ein Wartungsplan

### Dediziertes Team

Stellen Sie sicher, dass Sie ein dediziertes Team haben, das sowohl die anfängliche Dokumentation schreibt als auch sie in Zukunft mit den erforderlichen Aktualisierungen pflegt.

Denken Sie darüber nach, wie viel Arbeit anfällt und wie viele Personen Sie dafür benötigen könnten.

- Wenn es sich um ein großes Projekt handelt, könnte es von Vorteil sein, mehrere Autoren, einen technischen Prüfer, um sicherzustellen, dass die Arbeit technisch korrekt ist, einen Lektor, um die Sprache zu verbessern, jemanden, der Codebeispiele schreibt, usw. zu haben.
- Bei einem kleineren Projekt könnten ein oder zwei Personen mehrere Rollen übernehmen. Wie auch immer Sie das Team aufbauen möchten, ist in Ordnung, solange es für Sie funktioniert.

Ein Mitglied des MDN Web Docs-Teams wird Ihrem Projekt zugewiesen, um Unterstützung auf Seite der MDN Web Docs zu bieten.

Sie sollten einen (oder zwei) Teamleiter benennen, der bzw. die sich mit dem Mitglied des MDN Web Docs-Teams abstimmen kann.

Der MDN Web Docs-Vertreter wird helfen, allen in Ihrem Team die erforderlichen Berechtigungen zu erteilen, um an der [MDN-Organisation auf GitHub](https://github.com/mdn) zu arbeiten.

### Projektplan und Roadmap

Erstellen Sie einen Plan für das Projekt — Aufgaben, geschätzte Fertigstellungstermine und Meilensteine, die Sie verfolgen möchten, um sicherzustellen, dass Sie stetige Fortschritte machen.

Wenn das Projekt groß ist, sollten Sie erwägen, eines Ihrer Teammitglieder als Projektmanager zu benennen. Sie sollten auch in Erwägung ziehen, einen Teilprojektplan für eine erste Veröffentlichung zu schreiben, der den Mindestumfang an Dokumentation umfasst, der nützlich zu veröffentlichen ist (ein _Minimum Viable Product_); Sie können es später mit weiteren Ergänzungen verfolgen.

Wenn das Dokumentationsprojekt klein ist, müssen Sie dennoch eine Aufzeichnung darüber führen, was getan wurde und was nicht, in welchem Stadium sich jeder Teil der Dokumentation befindet (z. B. nicht begonnen, in Bearbeitung, Entwurf geschrieben, überprüft, abgeschlossen) und wer an was arbeitet.

### Schreibrichtlinien und Standards

Diese [Richtlinien](/de/docs/MDN/Writing_guidelines) geben an, wie wir erwarten, dass Dokumente für die MDN Web Docs geschrieben werden.

Wenn Sie zusätzliche Richtlinien für die Dokumente haben, die Sie schreiben, erwarten wir, dass dieser Leitfaden hinzugefügt und auf dem neuesten Stand gehalten wird.

Was die Standards betrifft, erwarten wir, dass Sie ein angemessenes Qualitätsniveau beim Verfassen Ihrer Dokumentation einhalten, um auf den MDN Web Docs zu verbleiben. Ihr MDN Web Docs-Vertreter wird mit Ihnen zusammenarbeiten, um Ihnen klarzumachen, was erwartet wird.

### Intuitive Dokumentationsstruktur

Wenn Sie den Vorschlagseinreichungsprozess durchlaufen haben, sollten Sie bereits eine grobe Gliederung dessen haben, was Sie für diese Technologie schreiben werden. Zu diesem Zeitpunkt sollten Sie das in einen Strukturplan der Website verfeinern: Denken Sie darüber nach, wie die Dokumentenhierarchie aussehen wird und wo alles passt und miteinander verlinkt wird.

Jedes Projekt ist anders, aber wir empfehlen in etwa Folgendes:

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

Jeder Seitentyp, den Sie in Ihrem Projekt verwenden, sollte eine Seitenschablone haben, von der andere die Struktur kopieren können. Sie sollten sich frühzeitig für diese entscheiden.

Bitte sehen Sie sich unseren Abschnitt über [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) an. Wenn Ergänzungen erforderlich sind, stimmen Sie sich bitte mit Ihrem MDN Web Docs-Vertreter ab.

### Wartungsplan

Die Dokumentation für diese Technologie muss gepflegt werden, um auf den MDN Web Docs zu bleiben:

- Die Inhalte und Dateien für die MDN Web Docs werden auf GitHub gespeichert. Wenn andere Änderungen an der Dokumentation Ihrer Technologie vornehmen, muss ein Mitglied Ihres Teams diese Änderungen überprüfen, um sicherzustellen, dass der Inhalt noch gut ist. Sie können die offenen Pull-Requests (PRs) über die Benachrichtigungsfunktion von GitHub nachverfolgen.
- Wenn sich Änderungen an der Technologie ergeben, die eine Aktualisierung der Dokumentation erfordern, muss Ihr Team entsprechende Updates vornehmen und dabei dieselben Standards wie die ursprüngliche Dokumentation beibehalten.

Wenn über einen Zeitraum von sechs Monaten keine positiven Änderungen beobachtet werden und die Dokumentation in einem der folgenden Zustände erscheint:

- Veraltet oder ungepflegt
- Ohne Abschluss ins Stocken geraten
- Niedrige Qualität
- Veraltet werdend

Dann wird die Dokumentation für diese Technologie als tot betrachtet. Nach einer Diskussion zwischen Ihrem Team und dem MDN Web Docs-Teamvertreter wird die Dokumentation entfernt.

Wir hoffen, Sie verstehen, dass wir in solchen Angelegenheiten streng sein müssen — wir können nicht zulassen, dass die Webseite mit qualitativ schlechter, unvollständiger oder veralteter Dokumentationen gefüllt wird.
