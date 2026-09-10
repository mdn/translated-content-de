---
title: Kriterien für die Aufnahme in MDN Web Docs
short-title: Kriterien für die Aufnahme
slug: MDN/Writing_guidelines/Criteria_for_inclusion
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

Dieser Artikel beschreibt detailliert die Kriterien für die Aufnahme von Inhalten in MDN Web Docs, den Prozess zur Aufnahme neuer Dokumentation sowie Erwartungen und Richtlinien für eine antragstellende Partei.

Dies richtet sich an größere Projekte. Um eine neue Seite oder einen neuen Artikel vorzuschlagen, lesen Sie bitte den Abschnitt [Inhalte vorschlagen](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) auf der Seite „Was wir schreiben“.

## Webstandards-Technologien

Der Aufgabenbereich von MDN Web Docs besteht darin, Webstandards-Technologien zu dokumentieren, die in einer von einer zuverlässigen Standardisierungsorganisation veröffentlichten Spezifikation enthalten sind und von mindestens einem stabilen Browser unterstützt werden. Diese Kriterien zeigen ausreichend Interesse, Stabilität und eine „Implementierungsabsicht“ der Webbranche insgesamt. Daher halten wir diese Technologien für eine sichere Investition unserer Zeit und Mühe in ihre Dokumentation. Früher als zu diesem Zeitpunkt könnte eine Webtechnologie oder Funktion aufgrund mangelnden Interesses eingestellt werden oder so instabil sein, dass sie sich erheblich ändern könnte, was unnötigerweise viel Überarbeitung erfordern würde (was wir nach Möglichkeit vermeiden möchten).

## Technologien, die keine Webstandards sind

Technologien, die keine Webstandards sind, erfüllen die oben zusammengefassten Kriterien nicht. Normalerweise würden wir sie nicht für eine Dokumentation in MDN Web Docs in Betracht ziehen.

Unser Leitbild lautet _„Entwicklerinnen und Entwicklern die Informationen bereitzustellen, die sie benötigen, um einfach Projekte im offenen Web zu erstellen“_. Dies legt nahe, dass wir die Dokumentation von Technologien in Betracht ziehen sollten, die für Webentwickler nützlich sind, selbst wenn es sich nicht um offene Webstandards handelt, sie sich nicht auf dem Standardisierungspfad befinden usw.

Wenn Sie eine Technologie, die kein Webstandard ist, für die Aufnahme in MDN Web Docs in Betracht ziehen möchten, sollten Sie sicherstellen, dass sie die folgenden Kriterien erfüllt.

## Kriterien für die Aufnahme in MDN Web Docs

Technologien sollten die hier beschriebenen Kriterien erfüllen, um für eine Dokumentation in MDN Web Docs in Betracht gezogen zu werden.

### Offen und nicht proprietär sein

Bei MDN Web Docs unterstützen wir offene Technologien. Wir unterstützen keine geschlossenen Technologieökosysteme, die von einer einzelnen Organisation kontrolliert werden, die nicht für Beiträge jeder interessierten Partei offen sind und die nicht über mehrere Plattformen und Systeme hinweg interoperabel sind. Wir sind der Ansicht, dass Technologie für alle besser funktioniert, wenn sie offen entwickelt wird.

### Im Web verfügbar sein und mit Webtechnologien verbunden sein

Unser zentraler Aufgabenbereich sind Webstandards-Technologien; es gibt keinen Grund, mit der Dokumentation von Technologien zu beginnen, die keinen Bezug zum Web haben oder für Webentwickler von Interesse sind.

### Anzeichen für Interesse und Akzeptanz zeigen

Wir möchten unsere Zeit nicht mit der Dokumentation einer Technologie verbringen, für die es aus der Branche keine Anzeichen für Interesse und Akzeptanz gibt. Möglicherweise ist es einfach noch zu früh, mit der Dokumentation der Technologie zu beginnen, und wir könnten ihre Dokumentation in MDN Web Docs künftig in Betracht ziehen.

### Keine Anzeichen dafür zeigen, veraltet oder ersetzt zu werden

Im Zusammenhang mit dem obigen Punkt möchten wir auch keine Zeit mit der Dokumentation einer Technologie verbringen, die sich spät in ihrem Lebenszyklus befindet und bereits Anzeichen für nachlassendes Interesse zeigt.

### Keine etablierte Dokumentationsressource an anderer Stelle haben

Es gibt viele Bibliotheken und Frameworks, die keine Webstandards sind, aber auf Webtechnologien aufbauen und in der Webbranche sehr beliebt sind. Wir dokumentieren keines davon, da sie im Allgemeinen bereits über etablierte Dokumentationsressourcen verfügen. Es wäre unklug, mit der offiziellen Ressource eines beliebten Frameworks zu konkurrieren — dies wäre Zeitverschwendung und würde wahrscheinlich Entwickler verwirren, die versuchen, die Technologie zu erlernen.

### Eine Community haben, die bereit ist, die Dokumentation zu schreiben und zu pflegen

Das Team von MDN Web Docs konzentriert sich auf die Dokumentation der offenen Webplattform. Wenn Sie möchten, dass eine Technologie in diesem Bereich für eine Dokumentation in MDN Web Docs in Betracht gezogen wird, benötigen Sie eine Community, die bereit ist, die Dokumentation zu schreiben und sie nach der Fertigstellung zu pflegen. Unser Team unterstützt in solchen Fällen gerne mit Leitlinien, Bearbeitungen und Feedback, verfügt jedoch nicht über Ressourcen für mehr als das.

> [!NOTE]
> Die Arbeit an MDN Web Docs erfolgt auf GitHub und „offen“. Ihr Team sollte mit git und GitHub vertraut sein und sich mit der Arbeit im Open-Source-Bereich wohlfühlen.

## Prozess zur Auswahl der neuen Technologie

Wenn eine Technologie ein guter Kandidat für eine Dokumentation in MDN Web Docs zu sein scheint, können Sie eine Diskussion in den [GitHub-Community-Diskussionen](/de/docs/MDN/Community/Communication_channels#github_discussions) starten, um die Aufnahme dieser Technologie vorzuschlagen und zu diskutieren. Dieser Abschnitt beschreibt, was der Vorschlag enthalten sollte.

### Einreichen des Vorschlags

Technologien werden von Fall zu Fall für die Aufnahme in MDN Web Docs geprüft. Zur Prüfung müssen Sie einen Vorschlag mit dem Titel „Proposal for documenting a new technology on MDN Web Docs“ einreichen. Wir benötigen folgende Informationen von Ihnen im Vorschlag:

- Die Technologie, ihr Kernzweck bzw. ihre Anwendungsfälle und die Zielgruppe von Entwicklern.
- Welche Resonanz in Branche oder Community gibt es rund um die Technologie?
  - Verwenden viele Webentwickler sie? Wie sieht die Akzeptanz in der Branche aus?
  - Möchten oder benötigen viele Webentwickler diese Informationen?
  - Wie groß ist die Zielgruppe für diese Informationen? Unterstützende Statistiken wären hilfreich, falls Sie darüber verfügen.
- Wie steht die Technologie mit zentralen Webtechnologien und Webbrowsern in Beziehung? Nützliche Details sind:
  - Verwendet sie HTML und CSS, gibt jedoch im Allgemeinen nicht ins Web aus?
  - Wird sie in Webbrowsern über ein Polyfill unterstützt?
- Welche Dokumentation oder Ressourcen sind bereits verfügbar, die die Technologie abdecken?
- Wie viel Dokumentation müsste zu MDN Web Docs hinzugefügt werden?
  - Listen Sie die erwartete Anzahl von Leitfäden, Tutorials, Referenzseiten für Elemente/Methoden/Attribute usw. auf.
  - Stellen Sie ein Inhaltsverzeichnis auf hoher Ebene bereit.
  - Erwähnen Sie die Art von „erweiterten“ Funktionen, die Sie Ihrer Meinung nach für diese Ressource benötigen könnten, über die grundlegenden Dokumentationsseiten hinaus. Erwarten Sie eingebettete Videos, interaktive Codebeispiele usw.?
- Wer wird die Dokumentation schreiben? Wer sind diese Personen und warum sind sie für diese Aufgabe geeignet?
- Wie wird die Dokumentation gepflegt?

Sie müssen uns zu diesem Zeitpunkt keine Hunderte von Seiten mit Details bereitstellen (tatsächlich wäre es uns lieber, wenn Sie das nicht täten). Ein paar Absätze zu jedem der oben genannten Punkte sind mehr als ausreichend.

> [!NOTE]
> MDN Web Docs ist in erster Linie eine englischsprachige Website (en-US). Die primäre Sprache für Ihr Projekt sollte US-Englisch sein.

### Auf eine Antwort warten

Wir werden die Technologie und die von Ihnen im Vorschlag eingereichten Informationen prüfen und mit einer der folgenden Antworten reagieren:

- **Nein**: Wir denken nicht, dass dies die Kriterien für eine Dokumentation in MDN Web Docs erfüllt.
- **Vielleicht**: Wir sind nicht sicher, ob sie für eine Dokumentation in MDN Web Docs geeignet ist, und möchten einige weitere Fragen stellen.
- **Ja**: Wir halten es für angemessen, sie in MDN Web Docs aufzunehmen.

Wenn die Technologie ein guter Kandidat ist, unterstützt das Team Sie beim Einstieg in die Dokumentation.

## Projektrichtlinien für die Dokumentation der neuen Technologie

Wenn Ihre ausgewählte Technologie für eine Dokumentation in MDN Web Docs akzeptiert wird, besteht der nächste Schritt darin, zu beginnen.

Um sicherzustellen, dass Ihr Projekt zur Dokumentation der neuen Technologie in MDN Web Docs erfolgreich ist, benötigen wir von Ihnen Folgendes:

- Ein engagiertes Team
- Einen Projektplan und eine Roadmap
- Schreibrichtlinien und Standards
- Eine intuitive Dokumentationsstruktur
- Einen Wartungsplan

### Engagiertes Team

Stellen Sie sicher, dass Sie über ein engagiertes Team verfügen, das sowohl die ursprüngliche Dokumentation schreibt als auch sie künftig mit den erforderlichen Aktualisierungen pflegt.

Überlegen Sie, wie viel Arbeit anfällt und wie viele Personen Sie dafür benötigen könnten.

- Bei einem großen Projekt profitieren Sie möglicherweise von mehreren Autoren, einer technischen Überprüfung zur Kontrolle der technischen Korrektheit, einem Lektorat zur sprachlichen Überarbeitung, einer Person zum Schreiben von Codebeispielen usw.
- Bei einem kleineren Projekt können ein oder zwei Personen mehrere Rollen übernehmen. Wie Sie das Team aufbauen möchten, ist Ihnen überlassen, solange es für Sie funktioniert.

Ein Mitglied des MDN-Web-Docs-Teams wird Ihrem Projekt zugewiesen, um Leitlinien zur MDN-Web-Docs-Seite der Arbeit bereitzustellen.

Sie sollten eine oder zwei Personen als Teamleitung benennen, die mit dem Mitglied des MDN-Web-Docs-Teams zusammenarbeiten können.

Die Vertretung von MDN Web Docs hilft dabei, allen Mitgliedern Ihres Teams die erforderlichen Berechtigungen für die Arbeit in der [MDN-Organisation auf GitHub](https://github.com/mdn) zu verschaffen.

### Projektplan und Roadmap

Erstellen Sie einen Plan für das Projekt — Aufgaben, geschätzte Fertigstellungstermine und Meilensteine, die Sie verfolgen möchten, um sicherzustellen, dass Sie stetig Fortschritte machen.

Wenn das Projekt groß ist, sollten Sie in Erwägung ziehen, eines Ihrer Teammitglieder als Projektleitung einzusetzen. Sie sollten auch erwägen, einen Teilprojektplan für eine erste Veröffentlichung zu erstellen, die die kleinste sinnvolle Menge an veröffentlichungswürdiger Dokumentation umfasst (ein _Minimum Viable Product_); weitere Ergänzungen können später folgen.

Wenn das Dokumentationsprojekt klein ist, müssen Sie dennoch festhalten, was erledigt wurde und was nicht, in welcher Phase sich jeder Teil der Dokumentation befindet (z. B. nicht begonnen, in Bearbeitung, Entwurf geschrieben, überprüft, erledigt) und wer woran arbeitet.

### Schreibrichtlinien und Standards

Diese [Richtlinien](/de/docs/MDN/Writing_guidelines) beschreiben, wie wir erwarten, dass Dokumente für MDN Web Docs geschrieben werden.

Wenn Sie zusätzliche Richtlinien für die von Ihnen verfassten Dokumente haben, erwarten wir, dass dieser Leitfaden ergänzt und aktuell gehalten wird.

Hinsichtlich der Standards wird von Ihnen erwartet, ein angemessenes Maß an Schreibqualität aufrechtzuerhalten, damit Ihre Dokumentation in MDN Web Docs verbleiben kann. Ihre Vertretung von MDN Web Docs wird mit Ihnen zusammenarbeiten, um Ihnen klarzumachen, was erwartet wird.

### Intuitive Dokumentationsstruktur

Wenn Sie den Prozess zur Einreichung des Vorschlags durchlaufen haben, sollten Sie bereits eine grobe Gliederung dessen haben, was Sie für diese Technologie schreiben werden. An diesem Punkt sollten Sie diese zu einem Plan der Website-Struktur verfeinern: Überlegen Sie, wie die Dokumenthierarchie aussehen wird und wo alles eingeordnet, verknüpft und miteinander verbunden wird.

Jedes Projekt ist anders, aber wir empfehlen die folgende Verzeichnisstruktur:

```plain
├── Guides
│   ├── guide_one
│   ├── guide_two
│   └── index.md
├── index.md
├── Reference
│   ├── Elements
│   ├── Methods
│   ├── Others ?
│   └── index.md
└── Tutorials
    ├── tutorial_one
    ├── tutorial_two
    └── index.md
```

Jeder Seitentyp, den Sie in Ihrem Projekt verwenden werden, sollte über eine Seitenvorlage verfügen, aus der andere die Struktur übernehmen können. Sie sollten diese frühzeitig festlegen.

Lesen Sie bitte unseren Abschnitt zu [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Wenn Ergänzungen erforderlich sind, stimmen Sie sich bitte mit Ihrer Vertretung von MDN Web Docs ab.

### Wartungsplan

Die Dokumentation für diese Technologie muss gepflegt werden, um in MDN Web Docs zu verbleiben:

- Die Inhalte und Dateien für MDN Web Docs werden auf GitHub gespeichert. Wenn andere Änderungen an der Dokumentation Ihrer Technologie vornehmen, muss ein Mitglied Ihres Teams diese Änderungen überprüfen, um sicherzustellen, dass die Inhalte weiterhin gut sind. Sie können die offenen Pull Requests (PRs) über die Benachrichtigungsfunktion von GitHub verfolgen.
- Wenn Änderungen an der Technologie erfolgen, die Aktualisierungen der Dokumentation erfordern, muss Ihr Team diese entsprechend vornehmen und dabei dieselben Standards wie für die ursprüngliche Dokumentation einhalten.

Wenn über einen Zeitraum von sechs Monaten keine positiven Veränderungen zu beobachten sind und die Dokumentation einen der folgenden Zustände aufweist:

- Veraltet oder ungepflegt
- Nicht fertiggestellt und ins Stocken geraten
- Geringe Qualität
- Zunehmend obsolet

Dann wird die Dokumentation für diese Technologie als nicht mehr aktiv betrachtet. Nach einer Diskussion zwischen Ihrem Team und der Vertretung des MDN-Web-Docs-Teams wird die Dokumentation entfernt.

Wir hoffen, Sie verstehen, dass wir bei solchen Themen streng sein müssen — wir können nicht zulassen, dass die Website mit Dokumentation schlechter Qualität, unvollständiger oder obsoleter Dokumentation gefüllt wird.
