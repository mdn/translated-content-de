---
title: Richtlinien für das Schreiben von Inhalten zur Webentwicklung
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{MDNSidebar}}

Der Abschnitt [Learn web development](/de/docs/Learn_web_development) auf MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen möchten. Daher erfordert er einen anderen Ansatz als der Rest der MDN-Inhalte. Dieser Artikel bietet Richtlinien zum Verfassen von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Learn Web Development (auch bekannt als Learn) sind Personen, die keine Experten im Front-End-Development sind – dazu gehören Studierende, Junior- oder Auszubildende in der Webentwicklung, Hobbyisten und Lehrkräfte, die nach bewährten Praktiken suchen, um ihren Schülern das Beste zu vermitteln.

## Themenschwerpunkte

Learn bietet einen strukturierten Weg mit vorgegebenen Lernzielen, die darauf ausgelegt sind, grundlegende Fähigkeiten und Praktiken zu lehren, die Leser darauf vorbereiten, erfolgreiche Front-End-Entwickler zu werden. Lernende können sich darauf verlassen, dass die Informationen korrekt für ihr Studium sind, und Lehrkräfte können darauf vertrauen, dass die Ergebnisse für die Gestaltung ihrer Kurse und Lehrpläne korrekt sind.

Daher beschränken wir den Umfang von Learn strikt auf:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Modulen für den Einstieg](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die zu Beginn der Reise eines Webentwicklers erforderlich sind, in unseren [Kernmodulen](/de/docs/Learn_web_development/Core).
- "Zweite Welle" Themen, die sinnvolle nächste Schritte für relative Anfänger darstellen, nachdem sie die Kernmodule gemeistert haben, in unseren [Erweiterungsmodule](/de/docs/Learn_web_development/Extensions).

Learn ist nicht dazu gedacht, der Ort auf MDN für Einführungsinhalte zu _allen_ Themen zu sein. Das bedeutet, dass nischige Themen wie MathML und Web Games sowie fortgeschrittene oder spezialisierte Themen wie reguläre Ausdrücke, Leistungstests, WebRTC und WebGPU nicht in Learn gehören.

Wenn ein Thema in Learn nicht behandelt wird und Sie der Meinung sind, dass es abgedeckt werden sollte, fügen Sie es nicht einfach hinzu – besprechen Sie es zuerst mit uns (siehe [Inhalte vorschlagen](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um MDN-Lerninhalte zur Webentwicklung zu erstellen und zu aktualisieren, sollten Sie in vielerlei Hinsicht denselben Ansatz wie für den Rest von MDN verfolgen. Sie sollten denselben allgemeinen [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) befolgen.

Es gibt jedoch einige Unterschiede:

- **Tutorial-Stil**: Der größte Teil der MDN-Inhalte ist eine Mischung aus Referenzmaterial und Leitfäden; Learn hingegen soll praktische Tutorials anbieten. Es gibt keine strikte Vorlage für jede Seite, aber sie sollten so geschrieben sein, dass sie Leser durch Schritt-für-Schritt-Abschnitte und "Probieren Sie es aus"-Abschnitte an die Hand nehmen. Diese sollen die Leser dazu anregen, sofort einzutauchen, Dinge auszuprobieren und Code zu schreiben. Siehe beispielsweise den Abschnitt "Probieren Sie es aus" am Ende unserer [Search engine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine)-Informationen. Diese werden mit folgendem Markdown erstellt:

  ```markdown
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Challenges**: Learn-Inhalte umfassen periodische Challenges, um sicherzustellen, dass der Leser die behandelten Themen verstanden hat, bevor er mit dem nächsten Artikel fortfährt. Diese werden derzeit in einigen unterschiedlichen Stilen geschrieben, z. B. siehe [Challenge: Structuring a page of content](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Test your skills: HTML images](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images). Wir planen jedoch, die Konsistenz und das Erlebnis dieser Challenges in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind allgemein für ihre Vollständigkeit bekannt. Learn-Inhalte sind bewusst nicht so erschöpfend vollständig wie der Rest der MDN-Inhalte. Sie sind weniger dicht und sanfter im Ansatz, um es Lernenden zu ermöglichen, nützliche Fähigkeiten zu erwerben und regelmäßig Fortschritte zu machen, ohne sich überfordert zu fühlen. Sie können später tiefer eintauchen. Learn-Inhalte können Details auslassen, um ein angenehmeres Lernerlebnis zu bieten, sofern sie dem Leser keine irreführenden oder schlechten Praktiken beibringen.
- **Stabile Lernziele**: Die Lernziele am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial vermittelt, und zusammen bieten sie einen strukturierten Lehrplan für Front-End-Webentwicklung. Es ist entscheidend, dass die Lernziele und die vermittelten Inhalte stabil und synchron bleiben, da der Inhalt sonst nicht als Grundlage für formales Lernen (wie Lehrkurse oder Zertifizierungen) vertrauenswürdig ist. Änderungen an den Lernzielen sollten daher langsam und nur aus gutem Grund vorgenommen werden. Wenn Sie versuchen, Inhalte hinzuzufügen, die in den zugehörigen Lernzielen nicht abgedeckt sind (oder umgekehrt), wird Ihre Pull-Anfrage abgelehnt. [Machen Sie einen Vorschlag](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content), bevor Sie Änderungen vornehmen.

> [!NOTE]
> Wir führen ein [Changelog](/de/docs/Learn_web_development/Changelog), das alle bedeutenden Änderungen an den Lernzielen dokumentiert, sodass Lehrkräfte alle auf MDN Learn basierenden Materialien anpassen können.

## Externe Links und Einbettungen

Wie in unseren [Richtlinien für externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) beschrieben, erlaubt MDN im Allgemeinen keine externen Links (oder Einbettungen), die kommerzielle Produkte oder Dienstleistungen bewerben oder auf Inhalte hinter einer Paywall verweisen. Dies soll das Risiko mindern, dass MDN-Inhalte das Vertrauen verlieren und aufgrund von Spam-Links weniger nützlich werden.

Die Learn-Inhalte von MDN haben hierbei einige Ausnahmen. Wir erlauben Links zu externen Inhalten (die ggf. hinter einer Paywall liegen) von spezifischen vertrauenswürdigen Partnerseiten. Dies sind Seiten, zu denen MDN ein Vertrauensverhältnis aufgebaut hat, indem wir deren Qualität, Ethik und Engagement für Webstandards und bewährte Praktiken gründlich geprüft haben und ihnen bei der Aktualisierung ihrer Inhalte geholfen haben, wenn diese unseren Standards nicht entsprachen. Wir vertrauen darauf, dass diese Partner ihre Links nicht ohne Vorankündigung ändern, und darauf, dass deren Inhalte sicher zu verlinken sind.

Der Zweck dieser Partner-Links ist wie folgt:

- Zugriff auf unterstützende Inhalte, die auf dem, was auf unseren Seiten gelehrt wird, aufbauen.
- Zugriff auf multimediale Lernerfahrungen (Videos, Diashows, andere interaktive Inhalte), die MDN-Content-Teams nicht die Ressourcen haben zu produzieren. Wir legen den Fokus auf Texte auf MDN, aber Menschen wünschen sich oft andere Lernansätze.
- Einnahmen durch Affiliate-Links zu kostenpflichtigen Inhalten erzielen, die wir in die Verbesserung von MDN investieren können.

Wir:

- Fügen diese Links nicht so hinzu, dass sie die Integrität der MDN-Inhalte gefährden oder offen spamartig wirken; sie werden nur dort platziert, wo sie tatsächlich nützlich sind.
- Stellen sicher, dass immer eine kostenlose Option verfügbar ist, neben Inhalten, die hinter einer Paywall liegen. In vielen Fällen konnten wir unsere Partner davon überzeugen, Inhalte, die zuvor kostenpflichtig waren, kostenlos zur Verfügung zu stellen.
- Kennzeichnen Partnerinhalte klar mit einem "MDN learning partner"-Label, damit Sie sie deutlich von anderen Links unterscheiden können.

### Reihenfolge der "Siehe auch"-Links

Auf Learn-Inhaltsseiten sollten die "Siehe auch"-Links, die am unteren Rand angezeigt werden, in der folgenden Reihenfolge erscheinen:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten kostenlosen/bezahlten Inhalten.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
