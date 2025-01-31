---
title: Kriterien für die Aufnahme in MDN Web Docs
slug: MDN/Writing_guidelines/What_we_write/Criteria_for_inclusion
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

Dieser Artikel beschreibt im Detail die Kriterien für Inhalte, die auf MDN Web Docs aufgenommen werden sollen, den Antragsprozess zur Aufnahme neuer Dokumentationen sowie Erwartungen und Richtlinien für eine Partei, die sich bewirbt.

Dies richtet sich an größere Projekte. Um eine neue Seite oder einen Artikel vorzuschlagen, lesen Sie bitte den Abschnitt [Inhalte vorschlagen](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) auf der Seite „Was wir schreiben“.

## Web-Standard-Technologien

Der Aufgabenbereich von MDN Web Docs umfasst die Dokumentation von Web-Standard-Technologien, die in einer Spezifikation veröffentlicht sind, die von einer zuverlässigen Normungsorganisation stammt und in mindestens einem stabilen Browser unterstützt wird. Diese Kriterien signalisieren ein ausreichendes Interesse, Stabilität und „Implementierungsabsicht“ durch die Webindustrie im Allgemeinen. Daher denken wir, dass diese Technologien eine sichere Grundlage sind, um unsere Zeit und Mühe in ihre Dokumentation zu investieren. Etwas früher könnte eine Webtechnologie oder ein Feature aufgrund mangelnden Interesses abgebrochen werden oder so instabil sein, dass sie sich signifikant ändern könnte, was unnötigerweise umfangreiche Überarbeitungen erfordern würde (was wir nach Möglichkeit vermeiden).

## Nicht-Web-Standard-Technologien

Nicht-Web-Standard-Technologien sind Technologien, die unseren oben zusammengefassten Kriterien nicht folgen. Wir würden sie normalerweise nicht zur Dokumentation auf MDN Web Docs in Betracht ziehen.

Unser Leitbild ist es, _"Entwicklern die Informationen bereitzustellen, die sie benötigen, um Projekte auf dem offenen Web einfach zu erstellen"_. Dies legt nahe, dass wir in Betracht ziehen sollten, Technologien zu dokumentieren, die für Webentwickler nützlich sind, auch wenn sie keine offenen Webstandards sind oder sich auf dem Standardisierungsweg befinden.

Wenn Sie eine Nicht-Web-Standard-Technologie für die Aufnahme in MDN Web Docs in Betracht ziehen möchten, sollten Sie sicherstellen, dass sie die unten aufgeführten Kriterien erfüllt.

## Kriterien für die Aufnahme in MDN Web Docs

Technologien sollten die hier beschriebenen Kriterien erfüllen, um für die Dokumentation auf MDN Web Docs in Betracht gezogen zu werden.

### Offen und nicht proprietär sein

Bei MDN Web Docs unterstützen wir offene Technologien. Wir unterstützen keine geschlossenen Technologie-Ökosysteme, die von einer einzigen Entität kontrolliert werden, nicht offen für Beiträge von jeder interessierten Partei sind und nicht interoperabel über mehrere Plattformen und Systeme hinweg sind. Wir glauben, dass Technologie besser für alle funktioniert, wenn sie offen entwickelt wird.

### Für das Web zugänglich und mit Web-Technologien verwandt sein

Unser zentraler Aufgabenbereich sind Web-Standard-Technologien; es macht keinen Sinn, Technologien zu dokumentieren, die keinen Bezug zum Web haben oder kein Interesse für Webentwickler darstellen.

### Anzeichen von Interesse und Akzeptanz zeigen

Wir möchten unsere Zeit nicht damit verbringen, eine Technologie zu dokumentieren, die keinerlei Interesse oder Akzeptanz von der Industrie zeigt. Es könnte einfach zu früh sein, um mit der Dokumentation der Technologie zu beginnen, und wir könnten sie in Zukunft für eine Dokumentation auf MDN Web Docs in Betracht ziehen.

### Keine Anzeichen einer Veralterung oder Ersetzung zeigen

In Verbindung mit dem obigen Punkt möchten wir auch nicht unsere Zeit damit verbringen, eine Technologie zu dokumentieren, die sich bereits spät in ihrem Lebenszyklus befindet und bereits Anzeichen eines Rückgangs des Interesses zeigt.

### Keine etablierte Dokumentationsressource anderswo haben

Es gibt viele Bibliotheken und Frameworks, die keine Webstandards sind, aber auf Webtechnologien aufbauen und in der Webbranche sehr beliebt sind. Wir dokumentieren keine dieser, weil sie im Allgemeinen bereits etablierte Dokumentationsressourcen haben. Es wäre unklug, mit der offiziellen Ressource eines beliebten Frameworks zu konkurrieren — dies wäre eine Zeitverschwendung und würde wahrscheinlich Entwickler, die die Technologie lernen möchten, verwirren.

### Eine Gemeinschaft haben, die bereit ist, die Dokumentation zu schreiben und zu pflegen

Das MDN Web Docs-Team konzentriert sich auf die Dokumentation der offenen Webplattform. Wenn Sie möchten, dass eine Technologie in diesem Bereich für die Dokumentation auf MDN Web Docs in Betracht gezogen wird, müssen Sie eine Gemeinschaft zusammenstellen, die bereit ist, die Dokumentation zu schreiben und nach Fertigstellung zu pflegen. Unser Team bietet in solchen Fällen gerne Anleitung, einschließlich Bearbeitungen und Feedback, hat jedoch nicht die Ressourcen für mehr als das.

> [!NOTE]
> Die Arbeit an MDN Web Docs wird auf GitHub und 'open' durchgeführt. Ihr Team sollte geübt im Umgang mit git & GitHub sein und sich mit der Arbeit im Open-Source-Bereich wohl fühlen.

## Prozess zur Auswahl der neuen Technologie

Wenn eine Technologie ein guter Kandidat dafür zu sein scheint, auf MDN Web Docs dokumentiert zu werden, können Sie eine Diskussion auf den [GitHub-Community-Diskussionen](/de/docs/MDN/Community/Communication_channels#github_discussions) starten, um die Aufnahme dieser Technologie vorzuschlagen und zu diskutieren. Dieser Abschnitt beschreibt, was der Vorschlag beinhalten sollte.

### Einreichung des Vorschlags

Technologien werden fallweise für die Aufnahme in MDN Web Docs berücksichtigt. Für eine Berücksichtigung müssten Sie einen Vorschlag mit dem Titel „Vorschlag zur Dokumentation einer neuen Technologie auf MDN Web Docs“ einreichen. Wir benötigen von Ihnen im Vorschlag folgende Informationen:

- Die Technologie, ihr Kernzweck/Anwendungsfälle und die Zielentwicklergruppe.
- Welcher Art von Branchen- oder Community-Buzz gibt es um die Technologie?
  - Benutzen viele Webentwickler sie? Wie sieht die Akzeptanz in der Branche aus?
  - Wollen oder brauchen viele Webentwickler diese Informationen?
  - Wie groß ist die Zielgruppe für diese Informationen? Unterstützende Statistiken wären hilfreich, falls vorhanden.
- Wie steht die Technologie mit Kern-Webtechnologien und Web-Browsern in Verbindung? Nützliche Details beinhalten:
  - Nutzt es HTML und CSS, gibt aber im Allgemeinen nicht an das Web aus?
  - Wird es in Web-Browsern über ein Polyfill unterstützt?
- Welche Dokumentation oder Ressourcen gibt es bereits, die die Technologie abdecken?
- Wie viel Dokumentation müsste zu MDN Web Docs hinzugefügt werden?
  - Listen Sie die erwartete Anzahl von Leitfäden, Tutorials, Referenzseiten für Elemente/Methoden/Attribute usw. auf.
  - Geben Sie ein grobes Inhaltsverzeichnis an.
  - Erwähnen Sie die Art "fortgeschrittener" Funktionen, die Sie für diese Ressource benötigen könnten, über die grundlegenden Dokumentationsseiten hinaus. Erwarten Sie, eingebettete Videos, interaktive Codebeispiele usw. aufzunehmen?
- Wer wird die Dokumentation schreiben? Wer sind sie, und warum sind sie für den Job geeignet?
- Wie wird die Dokumentation gepflegt?

Sie brauchen uns zu diesem Zeitpunkt keine hunderte Seiten an Details zur Verfügung zu stellen (in der Tat wäre es uns lieber, wenn Sie dies nicht tun würden). Ein paar Absätze zu jedem der obigen Punkte sind mehr als ausreichend.

> [!NOTE]
> MDN Web Docs ist in erster Linie eine englischsprachige Seite (en-US). Die Hauptsprache für Ihr Projekt sollte US-Englisch sein.

### Auf eine Antwort warten

Wir werden die Technologie und die Informationen, die Sie im Vorschlag eingereicht haben, prüfen und mit einer der folgenden Antworten antworten:

- **Nein**: Wir denken, dass dies die Kriterien für die Dokumentation auf MDN Web Docs nicht erfüllt.
- **Vielleicht**: Wir sind uns nicht sicher, ob es für die Dokumentation auf MDN Web Docs geeignet ist und möchten weitere Fragen stellen.
- **Ja**: Wir denken, dass es geeignet ist, es auf MDN Web Docs einzuschließen.

Wenn die Technologie ein guter Kandidat ist, wird das Team Sie dabei unterstützen, mit der Dokumentation zu beginnen.

## Projektleitlinien zur Dokumentation der neuen Technologie

Wenn Ihre gewählte Technologie zur Dokumentation auf MDN Web Docs akzeptiert wird, besteht der nächste Schritt darin, zu beginnen.

Um sicherzustellen, dass Ihr Projekt zur Dokumentation der neuen Technologie auf MDN Web Docs erfolgreich ist, benötigen wir von Ihnen Folgendes:

- Ein engagiertes Team
- Ein Projektplan und eine Roadmap
- Schreibrichtlinien und -standards
- Eine intuitive Dokumentationsstruktur
- Ein Wartungsplan

### Engagiertes Team

Stellen Sie sicher, dass Sie ein engagiertes Team haben, das sowohl die anfängliche Dokumentation schreibt als auch sie zukünftig mit den erforderlichen Aktualisierungen pflegt.

Denken Sie darüber nach, wie viel Arbeit es gibt und wie viele Leute Sie möglicherweise dafür benötigen.

- Wenn es sich um ein großes Projekt handelt, können Sie davon profitieren, mehrere Autoren zu haben, einen technischen Prüfer, der die technische Richtigkeit sicherstellt, einen Lektor, der die Sprache bereinigt, jemanden, der Codebeispiele schreibt usw.
- Bei einem kleineren Projekt könnten ein oder zwei Personen mehrere Rollen übernehmen. Wie auch immer Sie das Team aufbauen möchten, ist in Ordnung, solange es für Sie funktioniert.

Ein Mitglied des MDN Web Docs-Teams wird Ihrem Projekt zugewiesen, um Anleitung zu den Aspekten von MDN Web Docs zu geben.

Sie sollten ein oder zwei Teamleiter ernennen, die mit dem Mitglied des MDN Web Docs-Teams kommunizieren können.

Der Vertreter von MDN Web Docs wird dabei helfen, Ihrem gesamten Team die erforderlichen Berechtigungen zu erteilen, um in der [MDN-Organisation auf GitHub](https://github.com/mdn) zu arbeiten.

### Projektplan und Roadmap

Erstellen Sie einen Plan für das Projekt — Aufgaben, geschätzte Abschlussdaten und Meilensteine, die Sie verfolgen möchten, um sicherzustellen, dass Sie stetige Fortschritte machen.

Wenn das Projekt groß ist, sollten Sie erwägen, einem Ihrer Teammitglieder die Rolle des Projektmanagers zuzuweisen. Sie sollten auch erwägen, einen Teilprojektplan für eine erste Veröffentlichung zu schreiben, die das Mindestmaß an Dokumentation umfasst, das nützlich ist, um veröffentlicht zu werden (ein _Minimum Viable Product_); weitere Ergänzungen können später folgen.

Wenn das Dokumentationsprojekt klein ist, müssen Sie dennoch festhalten, was bereits erledigt ist und was nicht, in welchem Stadium sich jeder Teil der Dokumentation befindet (z.B. nicht begonnen, in Arbeit, Entwurf geschrieben, überprüft, fertig) und wer an was arbeitet.

### Schreibrichtlinien und -standards

Diese [Richtlinien](/de/docs/MDN/Writing_guidelines) geben an, wie wir erwarten, dass Dokumente für MDN Web Docs geschrieben werden.

Wenn Sie zusätzliche Richtlinien für die Dokumente, die Sie schreiben, haben, erwarten wir, dass dieser Leitfaden ergänzt und auf dem neuesten Stand gehalten wird.

In Bezug auf Standards wird erwartet, dass Sie ein angemessenes Niveau der Schreibqualität für Ihre Dokumentation aufrechterhalten, damit sie auf MDN Web Docs verbleibt. Ihr Vertreter von MDN Web Docs wird mit Ihnen zusammenarbeiten, um Ihnen klarzumachen, was erwartet wird.

### Intuitive Dokumentationsstruktur

Wenn Sie den Prozess der Einreichung von Vorschlägen durchlaufen haben, sollten Sie bereits einen groben Umriss davon haben, was Sie für diese Technologie schreiben werden. An diesem Punkt sollten Sie das in einen Plan für die Seitenstruktur verfeinern: Denken Sie darüber nach, wie die Dokumentenhierarchie aussehen wird und wo alles hingehört und wie alles miteinander verlinkt wird.

Jedes Projekt ist anders, aber wir würden grob so etwas empfehlen:

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

Jeder Seitentyp, den Sie in Ihrem Projekt verwenden werden, sollte eine Seitenvorlage haben, von der andere die Struktur kopieren können. Sie sollten sich frühzeitig auf diese festlegen.

Bitte beachten Sie unseren Abschnitt über [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Wenn Ergänzungen vorgenommen werden müssen, wenden Sie sich bitte an Ihren Vertreter von MDN Web Docs.

### Wartungsplan

Die Dokumentation für diese Technologie muss gepflegt werden, um auf MDN Web Docs zu bleiben:

- Die Inhalte und Dateien für MDN Web Docs werden auf GitHub gespeichert. Wenn andere Änderungen an der Dokumentation für Ihre Technologie vornehmen, muss ein Mitglied Ihres Teams diese Änderungen überprüfen, um sicherzustellen, dass die Inhalte weiterhin gut sind. Sie können die offenen Pull Requests (PRs) über die Benachrichtigungsfunktion von GitHub verfolgen.
- Wenn Änderungen an der Technologie auftreten, die eine Aktualisierung der Dokumentation erfordern, muss Ihr Team die entsprechenden Updates vornehmen, während sie die gleichen Standards wie die ursprüngliche Dokumentation beibehalten.

Wenn über einen Zeitraum von sechs Monaten keine positiven Änderungen beobachtet werden und die Dokumentation sich in einem der folgenden Zustände befindet:

- Veraltet oder ungepflegt
- Ohne Abschluss ins Stocken geraten
- Von niedriger Qualität
- Wird obsolet

Dann wird die Dokumentation für diese Technologie als tot betrachtet. Nach einer Diskussion zwischen Ihrem Team und dem Vertreter des MDN Web Docs-Teams wird die Dokumentation entfernt.

Wir hoffen, Sie verstehen, dass wir in solchen Angelegenheiten streng sein müssen — wir können nicht zulassen, dass die Website mit schlechter, unvollständiger oder veralteter Dokumentation überfüllt wird.
