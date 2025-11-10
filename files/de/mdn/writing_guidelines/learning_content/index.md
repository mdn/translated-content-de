---
title: Leitfaden zum Verfassen von Inhalten für den Webentwicklungsbereich
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

Der Abschnitt [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Prinzipien der Webentwicklung erlernen möchten und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Dieser Artikel bietet Richtlinien zum Verfassen von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Learn Web Development (auch bekannt als Learn) sind Personen, die keine Expert*innen in der Front-End-Entwicklung sind – dazu gehören Studierende, Junior- oder Auszubildende in der Webentwicklung, Hobbyentwickler*innen und Lehrkräfte, die nach Leitlinien für Best Practices suchen, was sie ihren Schüler\*innen beibringen können.

## Themenabdeckung

Learn bietet einen strukturierten Pfad mit Lernergebnissen, der darauf ausgelegt ist, die grundlegenden Fähigkeiten und Praktiken zu vermitteln, die Leser*innen benötigen, um erfolgreiche Front-End-Entwickler*innen zu werden. Lernende können sich darauf verlassen, dass die richtigen Informationen für ihr Studium bereitgestellt werden, und Lehrkräfte können sich darauf verlassen, dass die richtigen Ergebnisse für die Gestaltung ihrer Kurse und Lehrpläne zur Verfügung stehen.

Daher beschränken wir den Umfang von Learn strikt auf:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Einstiegsmodulen](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die am Beginn der Reise einer Webentwickler\*in in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) erforderlich sind.
- "Zweite Welle"-Themen, die nützlich sind, damit relative Anfänger\*innen, nachdem sie die Kernmodule gemeistert haben, in unseren [Erweiterungsmodulen](/de/docs/Learn_web_development/Extensions) weitermachen können.

Learn soll nicht der Ort auf MDN sein, an dem Einführungsinhalte zu _allen_ Themen behandelt werden. Das bedeutet, dass spezielle Themen wie MathML und Web Games sowie fortgeschrittene oder spezialisierte Themen wie reguläre Ausdrücke, Leistungstests, WebRTC und WebGPU nicht zu Learn gehören.

Wenn Sie ein Thema vermissen und der Meinung sind, dass es behandelt werden sollte, versuchen Sie nicht einfach, es hinzuzufügen – besprechen Sie es zuerst mit uns (siehe [Vorschlagen von Inhalten](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um Inhalte für das Lernen von Webentwicklung bei MDN zu erstellen und zu aktualisieren, sollten Sie in vielerlei Hinsicht denselben Ansatz verfolgen wie für den Rest von MDN. Sie sollten denselben allgemeinen [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) befolgen.

Es gibt jedoch einige Unterschiede:

- **Tutorial-Stil**: Die meisten MDN-Inhalte sind eine Mischung aus Referenzmaterial und Leitfäden; Learn hingegen soll praxisnahe Tutorials bieten. Es gibt kein strenges Template für jede Seite, aber sie sollten so geschrieben sein, dass sie die Leser*innen an die Hand nehmen, durch eine Kombination aus Schritt-für-Schritt-Abschnitten und "Probieren Sie es aus"-Abschnitten führen. Diese sollen die Leser*innen anleiten, einzusteigen, Dinge auszuprobieren und mit dem Schreiben von Code zu beginnen. Siehe den Abschnitt "Probieren Sie es aus" am Ende unseres [Suchmaschinen](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine)-Informationsbereichs als Beispiel. Diese werden mit folgendem Markdown erstellt:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Herausforderungen**: Learn-Inhalte beinhalten periodisch Herausforderungen, um zu prüfen, ob die Leser\*innen die Themen verstanden haben, bevor sie zum nächsten Artikel übergehen. Diese sind derzeit in einigen verschiedenen Stilen geschrieben, siehe zum Beispiel [Herausforderung: Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), aber wir beabsichtigen, die Konsistenz und das Erlebnis dieser Herausforderungen in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind im Allgemeinen für ihre Vollständigkeit bekannt. Learn-Inhalte sind speziell nicht so umfassend wie der Rest der MDN-Inhalte. Sie sind weniger dicht und sanfter im Ansatz, um den Lernenden die Möglichkeit zu geben, nützliche Fähigkeiten zu erlernen und regelmäßig Fortschritte zu erzielen, ohne sich überfordert zu fühlen. Sie können später tiefer eintauchen. Learn-Inhalte können Details auslassen, um ein angenehmeres Lernerlebnis zu bieten, vorausgesetzt, es wird nichts vermittelt, das irreführend ist oder schlechte Praktiken lehrt.
- **Stabile Lernergebnisse**: Die Lernergebnisse am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial lehrt, und bieten zusammen einen strukturierten Lehrplan für die Front-End-Webentwicklung. Es ist von entscheidender Bedeutung, dass die Lernergebnisse und das, was gelehrt wird, sowohl stabil als auch synchron bleiben, da die Inhalte sonst nicht als Grundlage für formale Lerninhalte (zum Beispiel Bildungslehrgänge oder Zertifizierungen) vertraut werden können. Änderungen an den Lernergebnissen sollten daher langsam und nur aus gutem Grund erfolgen. Wenn Sie Inhalte hinzufügen möchten, die nicht in den zugehörigen Lernergebnissen abgedeckt sind (oder umgekehrt), wird Ihr Pull-Request geschlossen werden. [Schlagen Sie es zuerst vor](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content).

> [!NOTE]
> Wir führen ein [Änderungsprotokoll](/de/docs/Learn_web_development/Changelog), das alle wesentlichen Änderungen an den Lernergebnissen detailliert auflistet, damit Lehrkräfte alle auf MDN Learn basierenden Ressourcen aufrechterhalten können.

## Partnerlinks und Embeds

Wie in unseren Richtlinien für [externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) umrissen ist, erlaubt MDN im Allgemeinen keine externen Links (oder Embeds), die den Anschein erwecken, als würden kommerzielle Produkte oder Dienstleistungen unterstützt oder auf Inhalte verweisen, die hinter einer Paywall liegen. Dies dient dazu, das Risiko zu reduzieren, dass das Vertrauen in die Inhalte von MDN verloren geht und sie aufgrund von Spam-Links weniger nützlich werden.

MDN's Learn-Inhalte machen hier ein paar Ausnahmen. Wir erlauben Links zu externen Inhalten (die eventuell hinter einer Paywall liegen) von spezifischen vertrauenswürdigen Partnerseiten. Dies sind Seiten, mit denen MDN durch eine gründliche Überprüfung ihrer Qualität, Ethik und ihres Engagements für Webstandards und Best Practices ein vertrauensvolles Verhältnis aufgebaut hat und denen wir geholfen haben, ihre Inhalte zu aktualisieren, wenn sie nicht unseren Standards entsprachen. Wir vertrauen darauf, dass sie ihre Links nicht ohne Ankündigung ändern, und wir vertrauen darauf, dass ihre Inhalte sicher verlinkt werden können.

Der Zweck dieser Partner-Links ist es:

- Den Zugang zu unterstützenden Inhalten zu bieten, die auf dem aufbauen, was auf unseren Seiten gelehrt wird.
- Zugang zu multimedialen Lernerfahrungen (Videos, Diashows, andere interaktive Inhalte) zu bieten, die die MDN-Content-Teams nicht produzieren können. Auf MDN dreht sich alles um Texte, aber oft wünschen Menschen andere Lernansätze.
- Einnahmen über Affiliate-Links zu kostenpflichtigen Inhalten zu erzielen, die wir investieren können, um MDN noch besser zu machen.

Wir werden jedoch:

- Diese Links nicht in einer Weise hinzufügen, die die Integrität der Inhalte von MDN beeinträchtigt und offen spammy ist; nur dort, wo sie wirklich nützlich erscheinen.
- Immer sicherstellen, dass neben allem, was hinter einer Paywall liegt, eine kostenlose Option verfügbar ist. In vielen Fällen haben wir es geschafft, unsere Partner davon zu überzeugen, Inhalte kostenlos bereitzustellen, die zuvor hinter einer Paywall lagen.
- Partnerinhalte mit einem "MDN Lernpartner"-Label eindeutig kennzeichnen, damit Sie sie klar von anderen Links unterscheiden können.

### Reihenfolge der "Siehe auch" Links

Auf Seiten von Lerninhalten sollten die "Siehe auch" Links am Ende in folgender Reihenfolge erscheinen:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten freien/kostenpflichtigen Inhalten.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
