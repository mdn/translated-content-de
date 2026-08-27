---
title: Kriterien für die Aufnahme in die MDN Web Docs
short-title: Kriterien für die Aufnahme
slug: MDN/Writing_guidelines/Criteria_for_inclusion
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

Dieser Artikel beschreibt detailliert die Kriterien für Inhalte, die in die MDN Web Docs aufgenommen werden sollen, den Antragsprozess für die Aufnahme neuer Dokumentationen sowie Erwartungen und Richtlinien für eine antragstellende Partei.

Dies richtet sich an größere Projekte. Um eine neue Seite oder einen Artikel vorzuschlagen, lesen Sie bitte den Abschnitt [Inhalte vorschlagen](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) auf der Seite "Was wir schreiben".

## Webstandard-Technologien

Der Auftrag der MDN Web Docs besteht darin, Webstandard-Technologien zu dokumentieren, die in einer Spezifikation publiziert von einem zuverlässigen Standardisierungsgremium enthalten sind und in mindestens einem stabilen Browser unterstützt werden. Diese Kriterien signalisieren genügend Interesse, Stabilität und "Implementierungsabsicht" durch die Webindustrie im Allgemeinen. Daher denken wir, dass diese Technologien eine sichere Wette sind, dass es sich lohnt, unsere Zeit und Mühe in ihre Dokumentation zu investieren. Jede Technologie oder Funktion, die frühzeitiger ist, könnte dazu neigen, aufgrund von mangelndem Interesse abgesagt zu werden oder so instabil zu sein, dass sie sich erheblich ändern könnte, was unnötig viel Umschreiben bedeuten würde (was wir nach Möglichkeit vermeiden möchten).

## Nicht-Webstandard-Technologien

Nicht-Webstandard-Technologien sind Technologien, die unsere oben zusammengefassten Kriterien nicht erfüllen. Normalerweise würden wir sie nicht zur Dokumentation auf den MDN Web Docs in Betracht ziehen.

Unser Leitbild lautet: _"Entwicklern die Informationen bereitzustellen, die sie für die einfache Erstellung von Projekten im offenen Web benötigen"_. Dies legt nahe, dass wir in Betracht ziehen sollten, Technologien zu dokumentieren, die für Webentwickler nützlich sind, auch wenn sie keine offenen Webstandards sind oder dem Standardtrack folgen usw.

Wenn Sie eine Nicht-Webstandard-Technologie für die Aufnahme in die MDN Web Docs in Betracht ziehen möchten, sollten Sie sicherstellen, dass sie die unten stehenden Kriterien erfüllt.

## Kriterien für die Aufnahme in die MDN Web Docs

Technologien sollten die hier beschriebenen Kriterien erfüllen, um für die Dokumentation in den MDN Web Docs in Betracht gezogen zu werden.

### Offen und nicht proprietär sein

Bei den MDN Web Docs unterstützen wir offene Technologien. Wir unterstützen keine geschlossenen Technologieökosysteme, die von einer einzigen Einheit kontrolliert werden, nicht für Beiträge von interessierten Parteien offen sind und nicht interoperabel über mehrere Plattformen und Systeme hinweg sind. Wir glauben, dass Technologie besser für alle funktioniert, wenn sie offen entwickelt wird.

### Webbasiert und in Zusammenhang mit Webtechnologien stehen

Unser zentraler Auftrag sind Webstandard-Technologien; es gibt keinen Sinn, Technologien zu dokumentieren, die nicht mit dem Web in Verbindung stehen oder für Webentwickler von Interesse sind.

### Anzeichen von Interesse und Adoption zeigen

Wir möchten nicht unsere Zeit damit verbringen, eine Technologie zu dokumentieren, die keine Anzeichen von Interesse und Adoption von der Branche zeigt. Es könnte einfach zu früh sein, um die Technologie zu dokumentieren, und wir könnten in Betracht ziehen, sie in Zukunft auf den MDN Web Docs zu dokumentieren.

### Keine Anzeichen von Abkündigung oder Ablösung zeigen

In Bezug zum obigen Punkt möchten wir auch nicht unsere Zeit mit der Dokumentation einer Technologie verbringen, die sich in einem späten Lebenszyklus befindet und bereits Anzeichen des Interessenverlusts zeigt.

### Keine etablierte Dokumentationsressource andernorts haben

Es gibt viele Bibliotheken und Frameworks, die keine Webstandards sind, aber auf Webtechnologien aufbauen und sehr beliebt in der Webindustrie sind. Wir dokumentieren diese nicht, weil sie im Allgemeinen alle bereits etablierte Dokumentationsressourcen haben. Mit der offiziellen Ressource eines populären Frameworks zu konkurrieren wäre unklug - es wäre Zeitverschwendung und würde Entwickler, die die Technologie erlernen möchten, wahrscheinlich verwirren.

### Eine Gemeinschaft haben, die bereit ist, die Dokumentation zu schreiben und zu pflegen

Das MDN Web Docs-Team konzentriert sich auf die Dokumentation der offenen Webplattform. Wenn Sie möchten, dass eine Technologie in diesem Bereich in den MDN Web Docs dokumentiert wird, benötigen Sie eine Gemeinschaft, die bereit ist, die Dokumentation zu schreiben und nach der Fertigstellung zu pflegen. Unser Team ist in solchen Fällen gerne bereit, Anleitung zu geben, einschließlich Bearbeitungen und Feedback, aber wir haben nicht die Kapazitäten für mehr als das.

> [!NOTE]
> Die Arbeit an den MDN Web Docs wird auf GitHub und "im offenen Raum" durchgeführt. Ihr Team sollte mit Git & GitHub vertraut sein und sich im Open Source-Bereich wohlfühlen.

## Prozess zur Auswahl der neuen Technologie

Wenn eine Technologie ein guter Kandidat für die Dokumentation auf den MDN Web Docs zu sein scheint, können Sie eine Diskussion auf den [GitHub Community Discussions](/de/docs/MDN/Community/Communication_channels#github_discussions) starten, um die Aufnahme dieser Technologie vorzuschlagen und zu diskutieren. Dieser Abschnitt beschreibt, was der Vorschlag enthalten sollte.

### Einreichen des Vorschlags

Technologien werden fallweise für die Aufnahme in die MDN Web Docs in Betracht gezogen. Um sie in Betracht zu ziehen, müssten Sie einen Vorschlag mit dem Titel "Proposal for documenting a new technology on MDN Web Docs" einreichen. Wir benötigen die folgenden Informationen von Ihnen im Vorschlag:

- Die Technologie, ihre Kernzwecke/Anwendungsfälle und das Zielpublikum der Entwickler.
- Welche Art von Branchen- oder Gemeinschaftsbuzz gibt es rund um die Technologie?
  - Verwenden viele Webentwickler sie? Wie sieht die Branchenakzeptanz aus?
  - Möchten oder benötigen viele Webentwickler diese Informationen?
  - Wie groß ist das Zielpublikum für diese Informationen? Unterstützende Statistiken würden helfen, wenn Sie welche haben.
- Wie steht die Technologie in Beziehung zu Kernwebtechnologien und Webbrowsern? Nützliche Details beinhalten:
  - Verwendet sie HTML und CSS, wird aber im Allgemeinen nicht im Web angezeigt?
  - Wird sie in Webbrowsern über ein Polyfill unterstützt?
- Welche Dokumentation oder Ressourcen sind bereits verfügbar, die die Technologie abdecken?
- Wie viel Dokumentation müsste auf den MDN Web Docs hinzugefügt werden?
  - Listen Sie die erwartete Anzahl an Leitfäden, Tutorials, Referenzseiten für Elemente/Methoden/Attribute usw. auf.
  - Stellen Sie ein grobes Inhaltsverzeichnis bereit.
  - Nennen Sie die Art von „Advanced“-Funktionen, von denen Sie glauben, dass Sie sie für diese Ressource benötigen könnten, über die grundlegenden Dokumentationsseiten hinaus. Erwarten Sie die Einbindung von eingebetteten Videos, interaktiven Codebeispielen usw.?
- Wer wird die Dokumentation schreiben? Wer sind sie und warum sind sie für den Job geeignet?
- Wie wird die Dokumentation gepflegt?

Sie müssen uns zu diesem Zeitpunkt keine Hunderten von Seiten an Details bereitstellen (in der Tat wäre es uns lieber, wenn Sie das nicht tun würden). Ein paar Absätze zu jedem der obigen Punkte sind mehr als ausreichend.

> [!NOTE]
> Die MDN Web Docs sind primär eine englischsprachige Seite (en-US). Die Hauptsprache Ihres Projekts sollte US-Englisch sein.

### Auf eine Antwort warten

Wir werden die Technologie und die in Ihrem Vorschlag eingereichten Informationen in Betracht ziehen und mit einer der folgenden Antworten reagieren:

- **Nein**: Wir glauben nicht, dass dies die Kriterien für eine Dokumentation auf den MDN Web Docs erfüllt.
- **Vielleicht**: Wir sind uns nicht sicher, ob es für die Dokumentation in den MDN Web Docs geeignet ist und würden gerne weitere Fragen stellen.
- **Ja**: Wir glauben, dass es angemessen ist, es in die MDN Web Docs aufzunehmen.

Wenn die Technologie ein guter Kandidat ist, wird das Team Ihnen helfen, mit der Dokumentation zu beginnen.

## Projektleitlinien zur Dokumentation der neuen Technologie

Wenn Ihre gewählte Technologie für die Dokumentation auf den MDN Web Docs akzeptiert wird, besteht der nächste Schritt darin, zu starten.

Um sicherzustellen, dass Ihr Projekt zur Dokumentation der neuen Technologie auf den MDN Web Docs erfolgreich ist, benötigen wir, dass Sie die folgenden Punkte umsetzen:

- Ein dediziertes Team
- Einen Projektplan und eine Roadmap
- Schreibrichtlinien und Standards
- Eine intuitive Dokumentationsstruktur
- Einen Wartungsplan

### Dediziertes Team

Stellen Sie sicher, dass Sie ein dediziertes Team besitzen, das sowohl die anfängliche Dokumentation als auch die zukünftige Pflege mit den erforderlichen Aktualisierungen bereitstellt.

Denken Sie darüber nach, wie viel Arbeit vorhanden ist und wie viele Personen Sie dafür möglicherweise benötigen.

- Wenn es ein großes Projekt ist, könnten Sie davon profitieren, ein paar Autoren zu haben, einen technischen Redakteur zur Überprüfung der technischen Genauigkeit, einen Korrektor zur sprachlichen Bereinigung, jemanden für das Schreiben von Codebeispielen usw.
- Bei einem kleineren Projekt könnten Sie ein oder zwei Personen haben, die mehrere Rollen übernehmen. Wie auch immer Sie das Team aufbauen möchten, solange es für Sie funktioniert, ist es in Ordnung.

Ein Mitglied des MDN Web Docs-Teams wird Ihrem Projekt zugewiesen, um Anleitung zum Thema MDN Web Docs zu geben.

Sie sollten ein oder zwei Teamleiter ernennen, die mit dem MDN Web Docs-Teammitglied kommunizieren können.

Der MDN Web Docs-Vertreter wird helfen, alle erforderlichen Berechtigungen für Ihr Team zu organisieren, um in der [MDN-Organisation auf GitHub](https://github.com/mdn) arbeiten zu können.

### Projektplan und Roadmap

Erstellen Sie einen Plan für das Projekt - Aufgaben, geschätzte Fertigstellungstermine und Meilensteine, die Sie verfolgen möchten, um sicherzustellen, dass Sie stetige Fortschritte machen.

Wenn das Projekt groß ist, sollten Sie in Betracht ziehen, einen Ihrer Teammitglieder als Projektmanager einzusetzen. Sie sollten auch in Erwägung ziehen, einen Teilprojektplan für eine Erstveröffentlichung zu schreiben, der das Mindestmaß an nützlicher Dokumentation umfasst, die veröffentlicht werden kann (ein _Minimum Viable Product_); danach können Sie mit weiteren Ergänzungen folgen.

Wenn das Dokumentationsprojekt klein ist, sollten Sie dennoch Buch führen über das, was getan wurde und was nicht, in welchem Stadium sich jeder Teil der Dokumentation befindet (z. B. nicht begonnen, in Bearbeitung, Entwurf geschrieben, geprüft, fertig), und wer woran arbeitet.

### Schreibrichtlinien und Standards

Diese [Richtlinien](/de/docs/MDN/Writing_guidelines) geben an, wie wir erwarten, dass Dokumente für die MDN Web Docs geschrieben werden.

Wenn Sie zusätzliche Richtlinien für die von Ihnen verfassten Dokumente haben, erwarten wir, dass dieser Leitfaden ergänzt und auf dem neuesten Stand gehalten wird.

Was die Standards betrifft, wird erwartet, dass Sie ein angemessenes Maß an Schreibqualität beibehalten, damit Ihre Dokumentation auf den MDN Web Docs bleibt. Ihr MDN Web Docs-Vertreter wird mit Ihnen zusammenarbeiten, um Klarheit darüber zu schaffen, was erwartet wird.

### Intuitive Dokumentationsstruktur

Wenn Sie den Vorschlagsprozess durchlaufen haben, sollten Sie bereits eine grobe Gliederung dessen haben, was Sie für diese Technologie schreiben werden. An diesem Punkt sollten Sie dies in einen Site-Strukturplan verfeinern: denken Sie darüber nach, was die Dokumentenhierarchie sein wird und wo alles passt und miteinander verlinkt wird.

Jedes Projekt ist anders, aber wir empfehlen den folgenden Verzeichnispfad:

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

Jeder Seitentyp, den Sie in Ihrem Projekt verwenden werden, sollte eine Seitenschablone haben, von der andere die Struktur kopieren können. Sie sollten sich frühzeitig auf diese einigen.

Bitte beziehen Sie sich auf unseren Abschnitt über [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types). Wenn Ergänzungen notwendig sind, sprechen Sie bitte mit Ihrem MDN Web Docs-Vertreter.

### Wartungsplan

Die Dokumentation für diese Technologie muss gepflegt werden, um in den MDN Web Docs zu bleiben:

- Die Inhalte und Dateien der MDN Web Docs werden auf GitHub gespeichert. Wenn andere Änderungen an der Dokumentation für Ihre Technologie vornehmen, muss ein Mitglied Ihres Teams diese Änderungen überprüfen, um sicherzustellen, dass der Inhalt nach wie vor gut ist. Sie können die offenen Pull Requests (PRs) über die Benachrichtigungsfunktion von GitHub verfolgen.
- Wenn Änderungen an der Technologie auftreten, die eine Aktualisierung der Dokumentation erfordern, muss Ihr Team entsprechende Aktualisierungen vornehmen und dabei die gleichen Standards wie die ursprüngliche Dokumentation beibehalten.

Wenn über einen Zeitraum von sechs Monaten keine positiven Änderungen beobachtet werden und die Dokumentation einen der folgenden Zustände aufweist:

- Veraltet oder ungewartet
- Unvollendet ohne Fortschritt
- Niedrige Qualität
- Veraltet

Dann wird die Dokumentation für diese Technologie als veraltet angesehen. Nach einer Diskussion zwischen Ihrem Team und dem Vertreter des MDN Web Docs-Teams wird die Dokumentation entfernt.

Wir hoffen, Sie verstehen, dass wir in solchen Angelegenheiten streng sein müssen – wir können es uns nicht leisten, dass die Site sich mit qualitativ minderwertiger, unvollständiger oder veralteter Dokumentation füllt.
