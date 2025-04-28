---
title: Leitfaden zum Verfassen von Lerninhalten zur Webentwicklung
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

Der Abschnitt [Webentwicklung Lernen](/de/docs/Learn_web_development) auf MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der restliche MDN-Inhalt. Dieser Artikel bietet Richtlinien für das Verfassen von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Webentwicklung Lernen (auch bekannt als "Learn") sind Menschen, die keine Experten als Front-End-Entwickler sind – dazu gehören Schüler, Junior- oder Auszubildende Webentwickler, Hobbyisten und Lehrer, die nach Anleitungen für bewährte Verfahren suchen, was sie ihren Schülern beibringen sollten.

## Themenabdeckung

Learn bietet einen strukturierten Weg mit Lernzielen, der entwickelt wurde, um die grundlegenden Fähigkeiten und Praktiken zu lehren, die Leser benötigen, um erfolgreiche Front-End-Entwickler zu werden. Lernende können sich darauf verlassen, dass es die richtigen Informationen für ihr Studium bietet, und Lehrkräfte können sich darauf verlassen, dass es die richtigen Ergebnisse liefert, um ihre Kurse und Lehrpläne darauf aufzubauen.

Infolgedessen versuchen wir, den Umfang von Learn strikt auf Folgendes zu beschränken:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Einstiegsmodule](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die zu Beginn der Reise eines Webentwicklers erforderlich sind, in unseren [Kernmodulen](/de/docs/Learn_web_development/Core).
- Themen der „zweiten Welle“, die nützliche nächste Schritte für relative Anfänger darstellen, um fortzufahren, sobald sie die Kernmodule gemeistert haben, in unseren [Erweiterungsmodule](/de/docs/Learn_web_development/Extensions).

Learn ist nicht dazu gedacht, auf MDN die Anlaufstelle für Einführungsmaterial zu _allen_ Themen zu sein. Das bedeutet, dass spezielle Themen wie MathML und Web-Games sowie fortgeschrittene oder spezialisierte Themen wie reguläre Ausdrücke, Leistungstests, WebRTC und WebGPU nicht in Learn gehören.

Wenn Sie ein Thema nicht in Learn behandelt sehen und der Meinung sind, dass es behandelt werden sollte, versuchen Sie nicht, es einfach hinzuzufügen – diskutieren Sie zunächst mit uns darüber (siehe [Vorschlagen von Inhalten](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um Inhalt zur Webentwicklung auf MDN Learn zu erstellen und zu aktualisieren, sollten Sie in vielerlei Hinsicht den gleichen Ansatz wie beim Rest von MDN verfolgen. Sie sollten denselben allgemeinen [Leitfaden für den Schreibstil](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) befolgen.

Es gibt jedoch einige Unterschiede:

- **Tutorial-Stil**: Die meisten MDN-Inhalte sind eine Mischung aus Referenzmaterial und Leitfäden; Learn hingegen soll praktische Tutorials bereitstellen. Es gibt kein striktes Template für jede Seite, aber sie sollten so geschrieben sein, dass sie die Leser an die Hand nehmen, durch eine Kombination aus Schritt-für-Schritt-Abschnitten und „Probieren Sie es aus“-Abschnitten. Diese sollten die Leser anleiten, sich aktiv einzubringen, Dinge auszuprobieren und mit dem Schreiben von Code zu beginnen. Siehe beispielsweise den Abschnitt „Probieren Sie es aus“ am Ende unserer [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) Informationen. Diese werden mit folgendem Markdown erstellt:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Herausforderungen**: Learn-Inhalte beinhalten periodisch Herausforderungen, um zu testen, ob der Leser die Themen verstanden hat, über die er vor dem Fortfahren zum nächsten Artikel gelernt hat. Diese sind derzeit in einigen verschiedenen Stilen geschrieben, siehe zum Beispiel [Herausforderung: Strukturieren einer Inhaltseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), aber wir planen, die Konsistenz und das Erlebnis dieser in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind in der Regel für ihre Vollständigkeit bekannt. Learn-Inhalte sind spezifisch nicht so vollständig wie der Rest der MDN-Inhalte. Sie sind weniger dicht und sanfter im Ansatz, um es Lernenden zu ermöglichen, nützliche Fähigkeiten zu erwerben und regelmäßig Fortschritte zu machen, ohne sich überfordert zu fühlen. Sie können später tiefer eintauchen. Learn-Inhalte können Details auslassen, um ein angenehmeres Lernerlebnis zu bieten, sofern sie dem Leser nichts Irreführendes oder Schlechtes beibringen.
- **Stabile Lernergebnisse**: Die Lernergebnisse am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial lehrt, und zusammen bieten sie ein strukturiertes Curriculum für Front-End-Webentwicklung. Es ist entscheidend, dass die Lernergebnisse und das, was gelehrt wird, stabil und synchron bleiben, sonst kann der Inhalt nicht als Grundlage für formales Lernen (zum Beispiel Bildungskurse oder Zertifizierungen) angesehen werden. Änderungen an den Lernergebnissen sollten daher langsam und nur aus gutem Grund erfolgen. Wenn Sie versuchen, Inhalte hinzuzufügen, die nicht in den zugehörigen Lernergebnissen abgedeckt sind (oder umgekehrt), wird Ihr Pull-Request geschlossen. [Machen Sie zuerst einen Vorschlag](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content).

> [!NOTE]
> Wir führen eine [Änderungsliste](/de/docs/Learn_web_development/Changelog), die alle bedeutenden Änderungen an den Lernergebnissen dokumentiert, damit Lehrkräfte alle auf MDN Learn basierenden Ressourcen auf dem neuesten Stand halten können.

## Partnerlinks und Einbettungen

Wie in unseren [Richtlinien für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) dargelegt, erlaubt MDN im Allgemeinen keine externen Links (oder Einbettungen), die den Anschein erwecken, kommerzielle Produkte oder Dienstleistungen zu unterstützen oder auf Inhalte zu verweisen, die hinter einer Bezahlschranke stehen. Dies soll das Risiko mindern, dass die Inhalte von MDN Vertrauen verlieren und aufgrund von Spam-Links weniger nützlich werden.

Es gibt jedoch einige Ausnahmen für die Lerninhalte von MDN. Wir erlauben Links zu externen Inhalten (die möglicherweise hinter einer Bezahlschranke stehen) von bestimmten vertrauenswürdigen Partnerseiten. Dies sind Websites, zu denen MDN durch eine gründliche Prüfung ihrer Qualität, Ethik und ihres Engagements für Webstandards und bewährte Verfahren ein vertrauensvolles Verhältnis aufgebaut hat und ihnen bei der Aktualisierung ihrer Inhalte geholfen hat, wenn sie unseren Standards nicht entsprachen. Wir vertrauen darauf, dass sie ihre Links nicht ohne Vorankündigung ändern und dass ihre Inhalte sicher zu verlinken sind.

Der Zweck dieser Partnerlinks ist:

- Zugang zu unterstützenden Inhalten zu bieten, die auf dem aufbauen, was auf unseren Seiten gelehrt wird.
- Zugang zu multimedialen Lernerfahrungen (Videos, Diashows, andere interaktive Inhalte) zu bieten, die die MDN-Inhaltsteams nicht die Ressourcen haben, um sie zu erstellen. Auf MDN dreht sich alles um den Text, aber oft wollen Menschen verschiedene Lernansätze.
- Einnahmen über Affiliate-Links zu kostenpflichtigen Inhaltsoptionen zu erzielen, die wir investieren können, um MDN noch besser zu machen.

Jedoch werden wir:

- Diese Links nicht auf eine Weise hinzufügen, die die Integrität der Inhalte von MDN gefährdet und offen spamartig ist; nur dort, wo wir sie wirklich als nützlich empfinden.
- Immer sicherstellen, dass eine kostenlose Option neben allem, was hinter einer Bezahlschranke steht, verfügbar ist. In vielen Fällen haben wir es geschafft, unsere Partner zu überzeugen, Inhalte, die vorher hinter einer Bezahlschranke standen, kostenlos anzubieten.
- Partnerinhalte mit einem „MDN Learning Partner“-Label deutlich kennzeichnen, damit Sie sie klar von anderen Links unterscheiden können.

### Reihenfolge der "Siehe auch"-Links

Auf Learn-Inhaltsseiten sollten die „Siehe auch“-Links, die unten erscheinen, in der folgenden Reihenfolge erscheinen:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten kostenlosen/zahlpflichtigen Inhalten.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
