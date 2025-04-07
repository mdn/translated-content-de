---
title: Richtlinien zum Schreiben von Lerninhalten für Webentwicklung
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: af98ab1715ff54825888ef1f7f13d6e3e3bf90b8
---

{{MDNSidebar}}

Der Abschnitt [Webentwicklung lernen](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Prinzipien der Webentwicklung erlernen. Daher erfordert er einen anderen Ansatz als der Rest der MDN-Inhalte. Dieser Artikel bietet Richtlinien für das Schreiben von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Learn Web Development (auch bekannt als Learn) sind Personen, die keine erfahrenen Frontend-Entwickler sind. Dazu gehören Studenten, Junior- oder Trainee-Webentwickler, Hobbyisten und Lehrer, die nach den besten Praktiken suchen, was sie ihren Studenten beibringen sollen.

## Themenabdeckung

Learn bietet einen strukturierten Pfad mit Lernzielen, der darauf ausgelegt ist, die grundlegenden Fähigkeiten und Praktiken zu lehren, die Leser benötigen, um als Frontend-Entwickler erfolgreich zu sein. Lernende können sich darauf verlassen, dass sie die richtigen Informationen für ihr Studium erhalten, und Lehrkräfte können sich darauf verlassen, dass sie die richtigen Ergebnisse bieten, auf denen sie ihre Kurse und Curricula aufbauen können.

Deshalb streben wir an, den Umfang von Learn streng einzugrenzen auf:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Einsteigermodulen](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die am Anfang der Reise eines Webentwicklers benötigt werden, in unseren [Kernmodulen](/de/docs/Learn_web_development/Core).
- "Zweite Welle"-Themen, die nützliche nächste Schritte für relative Anfänger darstellen, um weiterzumachen, sobald sie die Kernmodule gemeistert haben, in unseren [Erweiterungsmodule](/de/docs/Learn_web_development/Extensions).

Learn ist nicht der Ort auf MDN für einführende Inhalte zu _allen_ Themen. Das bedeutet, dass Nischenthemen wie MathML und Web Games sowie fortgeschrittene oder spezialisierte Themen wie reguläre Ausdrücke, Performance-Tests, WebRTC und WebGPU in Learn nicht dazugehören.

Wenn Sie ein Thema nicht in Learn abgedeckt sehen und der Meinung sind, dass es abgedeckt werden sollte, versuchen Sie nicht einfach, es hinzuzufügen - diskutieren Sie es zuerst mit uns (siehe [Vorschlagen von Inhalten](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um Inhalte zur Webentwicklung für MDN Learn zu erstellen und zu aktualisieren, sollten Sie weitgehend denselben Ansatz wie für den Rest von MDN verfolgen. Sie sollten denselben allgemeinen [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) befolgen.

Es gibt jedoch einige Unterschiede:

- **Tutorialstil**: Die meisten MDN-Inhalte sind eine Mischung aus Referenzmaterial und Leitfäden; Learn hingegen soll praktische Tutorials bieten. Wir haben keine strikte Vorlage für jede Seite, aber sie sollten so geschrieben werden, dass sie die Leser an die Hand nehmen, durch eine Kombination aus schrittweisen Abschnitten und "Probieren Sie es aus"-Abschnitten. Diese sollten die Leser anleiten, einzusteigen, Dinge auszuprobieren und Code zu schreiben. Siehe beispielsweise den Abschnitt "Probieren Sie es aus" am Ende unserer [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine)-Informationen. Diese werden mit dem folgenden Markdown erstellt:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Herausforderungen**: Lerninhalte beinhalten regelmäßig Herausforderungen, um zu testen, ob der Leser die Themen verstanden hat, bevor er zum nächsten Artikel übergeht. Diese sind derzeit in einigen verschiedenen Stilen geschrieben, zum Beispiel siehe [Herausforderung: Strukturieren einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images), aber wir beabsichtigen, die Konsistenz und das Erlebnis dieser Inhalte in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind allgemein für ihre Umfassendheit bekannt. Lerninhalte sind ausdrücklich nicht so vollständig wie die übrigen MDN-Inhalte. Sie sind weniger dicht und sanfter im Ansatz, um es Lernenden zu ermöglichen, nützliche Fähigkeiten zu erlernen und regelmäßig Fortschritte zu erzielen, ohne sich überwältigt zu fühlen. Sie können später tiefer eintauchen. Lerninhalte können Details weglassen, um ein angenehmeres Lernerlebnis zu bieten, vorausgesetzt, es wird den Lesern nichts Falsches oder eine schlechte Praxis beigebracht.
- **Stabile Lernziele**: Die Lernziele am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial lehrt, und zusammen bieten sie einen strukturierten Lehrplan für die Frontend-Webentwicklung. Es ist entscheidend, dass die Lernziele und das Gelehrte sowohl stabil bleiben als auch synchron sind, sonst kann der Inhalt nicht als Grundlage für formales Lernen (zum Beispiel Ausbildungskurse oder Zertifizierungen) vertraut werden. Änderungen an den Lernzielen sollten daher langsam und nur aus gutem Grund erfolgen. Wenn Sie versuchen, Inhalte hinzuzufügen, die nicht in den zugehörigen Lernzielen abgedeckt sind (oder umgekehrt), wird Ihre Pull-Anfrage geschlossen. [Machen Sie einen Vorschlag](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content) zuerst.

> [!NOTE]
> Wir führen ein [Änderungsprotokoll](/de/docs/Learn_web_development/Changelog), das alle wesentlichen Änderungen an den Lernzielen dokumentiert, damit Bildungseinrichtungen alle auf MDN Learn basierenden Ressourcen pflegen können.

## Externe Links und Einbettungen

Wie in unseren [Externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) Richtlinien dargelegt, erlaubt MDN generell keine externen Links (oder Einbettungen), die kommerzielle Produkte oder Dienstleistungen unterstützen oder auf Inhalte hinter einer Bezahlschranke verweisen. Dies dient dazu, das Vertrauen in MDN's Inhalte zu wahren und deren Nützlichkeit zu gewährleisten, indem Spam-Links vermieden werden.

MDN's Lerninhalte haben hiervon einige Ausnahmen. Wir erlauben Links zu externen Inhalten (die möglicherweise hinter einer Bezahlschranke stehen) von spezifischen vertrauenswürdigen Partnerseiten. Dies sind Seiten, mit denen MDN eine vertrauensvolle Beziehung aufgebaut hat, indem wir deren Qualität, Ethik und Engagement für Webstandards und bewährte Praktiken gründlich geprüft haben und sie dabei helfen, ihre Inhalte zu aktualisieren, wenn sie nicht unseren Standards entsprechen. Wir vertrauen darauf, dass sie ihre Links nicht ohne Ankündigung ändern, und dass ihre Inhalte sicher sind, um darauf zu verlinken.

Der Zweck dieser Partnerlinks ist wie folgt:

- Zugang zu unterstützenden Inhalten zu bieten, die auf dem aufbauen, was in unseren Seiten gelehrt wird.
- Zugang zu multimedialen Lernerfahrungen (Videos, Diashows, anderes interaktives Material) zu bieten, die die MDN-Inhaltsteams nicht die Ressourcen haben, um sie zu produzieren. Wir auf MDN sind hauptsächlich auf den Text fokussiert, aber Menschen möchten oft unterschiedliche Lernansätze.
- Einnahmen durch Affiliate-Links zu kostenpflichtigen Inhalten zu erzielen, die wir investieren können, um MDN noch besser zu machen.

Allerdings werden wir:

- Diese Links nicht auf eine Weise hinzufügen, die die Integrität der MDN-Inhalte beeinträchtigt und offen spammig erscheint; nur dort, wo wir sie als wirklich nützlich empfinden.
- Immer sicherstellen, dass neben allem, was hinter einer Bezahlschranke steht, eine kostenlose Option verfügbar ist. In vielen Fällen ist es uns gelungen, unsere Partner davon zu überzeugen, dass Inhalte, die zuvor kostenpflichtig waren, kostenlos zugänglich gemacht werden.
- Partnerinhalte deutlich mit einem "MDN Lernpartner" Label kennzeichnen, damit Sie sie klar von anderen Links unterscheiden können.

### Reihenfolge der "Siehe auch" Links

Auf den Lerninhaltsseiten sollten die "Siehe auch" Links am Ende in folgender Reihenfolge erscheinen:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten kostenlosen/kostenpflichtigen Inhalten.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
