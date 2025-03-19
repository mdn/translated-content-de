---
title: Schreibweisenrichtlinien für das Erlernen der Webentwicklung
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

{{MDNSidebar}}

Der Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) auf MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung lernen möchten, und erfordert daher einen anderen Ansatz als der Rest des MDN-Inhalts. Dieser Artikel bietet Richtlinien zum Verfassen von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Webentwicklung lernen (auch bekannt als Lernen) sind Personen, die keine Experten in der Frontend-Entwicklung sind – dazu gehören Studenten, Junior- oder Trainee-Webentwickler, Hobbyisten und Lehrer, die nach Best-Practice-Richtlinien suchen, was sie ihren Schülern beibringen sollen.

## Themenabdeckung

Lernen bietet einen strukturierten Pfad mit Lernzielen, der darauf ausgelegt ist, die grundlegenden Fähigkeiten und Praktiken zu lehren, die den Lernenden den Erfolg als Frontend-Entwickler ermöglichen. Lernende können darauf vertrauen, dass es die richtigen Informationen für ihr Studium liefert, und Lehrende können sich darauf verlassen, dass es die korrekten Ergebnisse liefert, auf denen sie ihre Kurse und Lehrpläne aufbauen können.

Daher beschränken wir den Umfang von Lernen streng auf:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Erste-Schritte-Modulen](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die zu Beginn des Weges eines Webentwicklers erforderlich sind, in unseren [Kernmodulen](/de/docs/Learn_web_development/Core).
- „Zweite Welle“-Themen, die als nützliche nächste Schritte für relative Anfänger dienen, um nach der Beherrschung der Kernmodule darauf aufzubauen, in unseren [Erweiterungsmodulen](/de/docs/Learn_web_development/Extensions).

Lernen ist nicht als Ort für Einführungsmaterialien zu _allen_ Themen auf MDN vorgesehen. Das bedeutet, dass Nischenthemen wie MathML und Web-Spiele sowie fortgeschrittene oder spezialisierte Themen wie reguläre Ausdrücke, Leistungstests, WebRTC und WebGPU nicht in Lernen gehören.

Wenn Sie ein Thema vermissen und denken, dass es behandelt werden sollte, versuchen Sie nicht, es einfach hinzuzufügen – besprechen Sie es zuerst mit uns (siehe [Vorschlag von Inhalten](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um Inhalte zur Webentwicklung auf MDN Learn zu erstellen und zu aktualisieren, sollten Sie in vielerlei Hinsicht denselben Ansatz wie für den Rest von MDN verfolgen. Dabei sollten Sie demselben allgemeinen [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) folgen.

Es gibt jedoch einige Unterschiede:

- **Anleitungsstil**: Die meisten MDN-Inhalte sind eine Mischung aus Referenzmaterial und Leitfäden; Lernen hingegen soll praxisnahe Anleitungen bieten. Wir haben keine strikte Vorlage für jede Seite, sie sollten jedoch so geschrieben sein, dass sie die Leser durch eine Kombination aus Schritt-für-Schritt-Abschnitten und „Probieren Sie es aus“-Abschnitten an die Hand nehmen. Diese sollten die Leser anleiten, einzutauchen, Dinge auszuprobieren und mit dem Schreiben von Code zu beginnen. Siehe den Abschnitt „Probieren Sie es aus“ am Ende unserer [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine)-Informationen zum Beispiel. Diese werden mit folgendem Markdown erstellt:

  ```markdown
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Herausforderungen**: Lerninhalte enthalten regelmäßig Herausforderungen, um zu testen, ob der Leser die zuvor behandelten Themen verstanden hat, bevor er zum nächsten Artikel übergeht. Diese sind derzeit in einigen verschiedenen Stilen geschrieben, siehe zum Beispiel [Herausforderung: Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images), aber wir beabsichtigen, die Konsistenz und das Erlebnis dieser in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind im Allgemeinen für ihre Vollständigkeit bekannt. Lerninhalte sind explizit nicht so erschöpfend vollständig wie der Rest des MDN-Inhalts. Sie sind weniger dicht und sanfter im Ansatz, um es den Lernenden zu ermöglichen, nützliche Fähigkeiten zu erwerben und regelmäßig Fortschritte zu machen, ohne sich überwältigt zu fühlen. Sie können später tiefer eintauchen. Lerninhalte können Details weglassen, um ein angenehmeres Lernerlebnis zu bieten, vorausgesetzt, es wird nichts Falsches oder Schlechte Praxis vermittelt.
- **Stabile Lernergebnisse**: Die Lernergebnisse am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial lehrt, und zusammen bieten sie einen strukturierten Lehrplan für die Frontend-Webentwicklung. Es ist entscheidend, dass die Lernergebnisse mit den vermittelten Inhalten stabil und im Einklang bleiben, da der Inhalt sonst nicht als Grundlage für formales Lernen (zum Beispiel Bildungskurse oder Zertifikate) vertrauenswürdig ist. Änderungen an den Lernergebnissen sollten daher langsam erfolgen und nicht ohne guten Grund. Wenn Sie versuchen, Inhalte hinzuzufügen, die nicht in den zugehörigen Lernergebnissen abgedeckt sind (oder umgekehrt), wird Ihre Pull-Anfrage geschlossen. [Machen Sie einen Vorschlag](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) zuerst.

> [!NOTE]
> Wir führen eine [Änderungsliste](/de/docs/Learn_web_development/Changelog), die alle bedeutenden Änderungen an den Lernergebnissen dokumentiert, sodass Lehrer alle auf MDN Learn basierenden Ressourcen auf dem Laufenden halten können.

## Externe Links und Einbettungen

Wie in unseren [Richtlinien für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) dargelegt, erlaubt MDN im Allgemeinen keine externen Links (oder Einbettungen), die kommerzielle Produkte oder Dienstleistungen bewerben oder auf Inhalte hinter Bezahlschranken verweisen. Dies dient dazu, das Risiko zu mindern, dass der Inhalt von MDN das Vertrauen verliert und aufgrund von Spam-Links weniger nützlich wird.

Die MDN-Inhalte zum Lernen haben einige Ausnahmen davon. Wir erlauben Links zu externen Inhalten (die hinter Bezahlschranken sein können) von bestimmten vertrauenswürdigen Partnerseiten. Dies sind Seiten, mit denen MDN eine vertrauensvolle Beziehung aufgebaut hat, indem die Qualität, Ethik und das Engagement für Webstandards und Best Practices gründlich geprüft wurden, und ihnen geholfen wurde, ihre Inhalte zu aktualisieren, wenn sie unseren Standards nicht entsprachen. Wir vertrauen darauf, dass sie ihre Links nicht ohne Vorankündigung ändern, und wir vertrauen darauf, dass ihre Inhalte sicher zu verlinken sind.

Der Zweck dieser Partnerlinks ist wie folgt:

- Zugang zu unterstützenden Inhalten zu bieten, die auf dem aufbauen, was auf unseren Seiten gelehrt wird.
- Zugang zu multimedialen Lernerfahrungen (Videos, Diashows, andere interaktive Inhalte) zu bieten, die die MDN-Inhaltsteams nicht die Ressourcen haben zu produzieren. Auf MDN konzentrieren wir uns voll und ganz auf den Text, aber Menschen möchten oft verschiedene Lernansätze.
- Einnahmen durch Affiliate-Links zu kostenpflichtigen Inhalten zu erzielen, die wir investieren können, um MDN noch besser zu machen.

Allerdings:

- Werden wir diese Links nicht in einer Weise hinzufügen, die die Integrität des MDN-Inhalts gefährdet und offen spammy ist; nur wo wir sie wirklich nützlich finden.
- Werden wir immer sicherstellen, dass eine kostenlose Option neben allem verfügbar ist, was hinter einer Bezahlschranke steckt. In vielen Fällen haben wir es geschafft, unsere Partner davon zu überzeugen, Inhalte kostenlos bereitzustellen, die zuvor hinter einer Bezahlschranke standen.
- Werden wir Partnerinhalte deutlich mit einem „MDN-Lernpartner“-Label kennzeichnen, damit Sie sie klar von anderen Links unterscheiden können.

### Reihenfolge der „Siehe auch“-Links

Auf den Seiten mit Lerninhalten sollten die „Siehe auch“-Links, die am Ende erscheinen, in folgender Reihenfolge erscheinen:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten kostenlosen/inhaltsbezahlschranken Informationen.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
