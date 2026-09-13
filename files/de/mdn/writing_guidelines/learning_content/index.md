---
title: Richtlinien zum Schreiben von Lerninhalten zur Webentwicklung
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

Der Abschnitt [Lerninhalte zur Webentwicklung](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Fundamente der Webentwicklung erlernen möchten. Daher erfordert er einen anderen Ansatz als der Rest des MDN-Inhalts. Dieser Artikel bietet Richtlinien zum Schreiben von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Learn Web Development (auch bekannt als Learn) sind Personen, die keine Experten in der Frontend-Entwicklung sind — dazu gehören Studierende, Junior- oder Trainee-Webentwickler, Hobbyisten und Lehrer, die nach Best-Practice-Leitlinien suchen, was sie ihren Schülern beibringen sollten.

## Themenabdeckung

Learn bietet einen strukturierten Pfad mit Lernergebnissen, der darauf abzielt, die grundlegenden Fähigkeiten und Praktiken zu lehren, die Leser darauf vorbereiten, erfolgreiche Frontend-Entwickler zu werden. Lernende können sich darauf verlassen, dass es die korrekten Informationen für ihr Studium bereitstellt, und Lehrkräfte können sich darauf verlassen, dass es die korrekten Ergebnisse liefert, auf denen sie ihre Kurse und Lehrpläne aufbauen können.

Daher beschränken wir den Umfang von Learn streng auf:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Einsteiger-Modulen](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die zu Beginn der Reise eines Webentwicklers in unseren [Kernmodulen](/de/docs/Learn_web_development/Core) erforderlich sind.
- "Zweite Welle"-Themen, die nützliche nächste Schritte für relative Anfänger darstellen, um darauf aufzubauen, sobald sie die Kernmodule gemeistert haben, in unseren [Erweiterungsmodulen](/de/docs/Learn_web_development/Extensions).

Learn ist nicht als der Ort auf MDN gedacht, an dem einführende Inhalte zu _allen_ Themen behandelt werden. Das bedeutet, dass Nischenthemen wie MathML und Web-Games sowie fortgeschrittene oder spezialisierte Themen wie reguläre Ausdrücke, Leistungstests, WebRTC und WebGPU nicht zu Learn gehören.

Sollten Sie ein Thema sehen, das in Learn nicht behandelt wird und Ihrer Meinung nach behandelt werden sollte, versuchen Sie nicht einfach, es hinzuzufügen — diskutieren Sie es zuerst mit uns (siehe [Vorschläge zu Inhalten](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um Inhalte zur Webentwicklung auf MDN zu erstellen und zu aktualisieren, sollten Sie in vielerlei Hinsicht denselben Ansatz wie für den Rest von MDN befolgen. Sie sollten denselben allgemeinen [Schreibstilleitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) verwenden.

Es gibt jedoch einige Unterschiede:

- **Tutorial-Stil**: Die meisten MDN-Inhalte sind eine Mischung aus Referenzmaterial und Leitfäden; Learn hingegen soll praxisorientierte Tutorials bieten. Wir haben keine strikte Vorlage für jede Seite, aber sie sollten so geschrieben sein, dass sie die Leser an der Hand führen, durch eine Kombination aus schrittweisen Abschnitten und "Probieren Sie es aus"-Abschnitten. Diese sollen die Leser dazu auffordern, einzusteigen, Dinge auszuprobieren und mit dem Schreiben von Code zu beginnen. Siehe den Abschnitt "Probieren Sie es aus" am Ende unserer [Suchmaschinen-Informationen](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine). Diese werden mit dem folgenden Markdown erstellt:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Herausforderungen**: Learn-Inhalte enthalten von Zeit zu Zeit Herausforderungen, um zu testen, ob der Leser die Themen verstanden hat, bevor er zum nächsten Artikel übergeht. Diese sind derzeit in ein paar unterschiedlichen Stilen geschrieben, siehe zum Beispiel [Herausforderung: Strukturierung einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), aber wir beabsichtigen, die Konsistenz und das Erlebnis dieser in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind im Allgemeinen für ihre Vollständigkeit bekannt. Learn-Inhalte sind speziell nicht so erschöpfend vollständig wie der Rest der MDN-Inhalte. Sie sind weniger dicht und sanfter im Ansatz, um es Lernenden zu ermöglichen, nützliche Fähigkeiten zu erlangen und regelmäßig Fortschritte zu machen, ohne sich überwältigt zu fühlen. Sie können später tiefer eintauchen. Learn-Inhalte können Details weglassen, um ein komfortableres Lernerlebnis zu bieten, vorausgesetzt, sie lehren den Leser nichts irreführendes oder schlechte Praxis.
- **Stabile Lernergebnisse**: Die Lernergebnisse am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial lehrt, und zusammen bieten sie ein strukturiertes Curriculum für die Frontend-Webentwicklung. Es ist wichtig, dass die Lernergebnisse und das, was gelehrt wird, sowohl stabil als auch synchron bleiben, andernfalls kann der Inhalt nicht als Grundlage für formales Lernen (zum Beispiel Bildungskurse oder Zertifizierungen) vertrauenswürdig sein. Änderungen an den Lernergebnissen sollten daher langsam und nicht ohne guten Grund erfolgen. Wenn Sie versuchen, Inhalte hinzuzufügen, die nicht in den zugeordneten Lernergebnissen behandelt werden (oder umgekehrt), wird Ihre Pull-Anfrage geschlossen. [Machen Sie zuerst einen Vorschlag](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content).

> [!NOTE]
> Wir führen ein [Changelog](/de/docs/Learn_web_development/Changelog), das alle wesentlichen Änderungen an den Lernergebnissen detailliert beschreibt, damit Lehrkräfte alle auf MDN Learn basierenden Ressourcen auf dem Laufenden halten können.

## Partnerlinks und Einbettungen

Wie in unseren Richtlinien für [externe Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) beschrieben, erlaubt MDN im Allgemeinen keine externen Links (oder Einbettungen), die kommerzielle Produkte oder Dienstleistungen empfehlen oder auf kostenpflichtige Inhalte verweisen. Dies soll das Risiko mindern, dass MDN-Inhalte an Vertrauen verlieren und aufgrund von Spam-Links weniger nützlich werden.

MDN's Learn-Inhalte haben hierzu einige Ausnahmen. Wir erlauben Links zu externen Inhalten (die kostenpflichtig sein könnten) von bestimmten vertrauenswürdigen Partnerseiten. Dies sind Seiten, mit denen MDN eine vertrauensvolle Beziehung aufgebaut hat, indem wir deren Qualität, Ethik und Engagement für Web-Standards und Best Practices sorgfältig geprüft haben und ihnen geholfen haben, ihre Inhalte zu aktualisieren, wo sie unseren Standards nicht entsprechen. Wir vertrauen darauf, dass diese Partner ihre Links nicht ohne Vorankündigung ändern, und wir vertrauen darauf, dass ihre Inhalte sicher zu verlinken sind.

Der Zweck dieser Partnerlinks ist:

- Zugang zu unterstützenden Inhalten zu bieten, die auf dem aufbauen, was in unseren Seiten gelehrt wird.
- Zugang zu multimedialen Lernerfahrungen (Videos, Diaschauen, andere interaktive Inhalte) zu bieten, die MDN-Content-Teams nicht über die Ressourcen verfügen, um sie zu produzieren. Wir sind bei MDN vor allem auf Texterstellung ausgerichtet, aber oft wollen Menschen unterschiedliche Lernansätze.
- Einnahmen über Affiliate-Links zu kostenpflichtigen Inhaltsoptionen zu erzielen, die wir investieren können, um MDN noch besser zu machen.

Wir werden jedoch:

- Diese Links nicht in einer Weise hinzufügen, die die Integrität der MDN-Inhalte gefährdet und offen spammy ist; nur dort, wo wir das Gefühl haben, dass sie wirklich nützlich sind.
- Immer sicherstellen, dass eine kostenlose Option neben allem, was kostenpflichtig ist, verfügbar ist. In vielen Fällen konnten wir unsere Partner überzeugen, Inhalte, die zuvor kostenpflichtig waren, kostenlos zur Verfügung zu stellen.
- Partnerinhalte mit einem "MDN Lernpartner"-Label deutlich kennzeichnen, damit Sie sie klar von anderen Links unterscheiden können.

### Reihenfolge der "Siehe auch"-Links

Auf Webseiten mit Learn-Inhalten sollten die am unteren Rand erscheinenden "Siehe auch"-Links in folgender Reihenfolge angezeigt werden:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten kostenlosen/kostenpflichtigen Inhalten.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
