---
title: Leitlinien zum Schreiben von Lerninhalten zur Webentwicklung
short-title: Learning content
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{MDNSidebar}}

Der Abschnitt [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) von MDN richtet sich speziell an Personen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als der Rest der MDN-Inhalte. Dieser Artikel bietet Leitlinien zum Schreiben von Lerninhalten.

## Zielgruppe

Die Zielgruppe von MDN Learn Web Development (auch als Learn bekannt) sind Personen, die keine Expert*innen in der Frontend-Entwicklung sind – dazu gehören Studierende, Junior- oder Auszubildende in der Webentwicklung, Hobbyisten und Lehrer, die nach bewährten Praktiken suchen, um ihren Schüler*innen das richtige Wissen zu vermitteln.

## Themenabdeckung

Learn bietet einen strukturierten Pfad mit Lernzielen, der darauf ausgelegt ist, die grundlegenden Fähigkeiten und Praktiken zu lehren, die Leser*innen benötigen, um erfolgreiche Frontend-Entwickler*innen zu werden. Lernende können sich darauf verlassen, dass es ihnen die richtigen Informationen für ihr Studium bietet, und Lehrkräfte können sich darauf verlassen, dass es ihnen die richtigen Ergebnisse liefert, um ihre Kurse und Lehrpläne darauf aufzubauen.

Infolgedessen beschränken wir den Umfang von Learn streng auf:

- Einrichtung, Soft Skills und Hintergrundwissen in unseren [Erste Schritte-Modulen](/de/docs/Learn_web_development/Getting_started).
- Die grundlegenden Technologien, die zu Beginn der Reise eines Webentwicklers erforderlich sind, in unseren [Kernmodulen](/de/docs/Learn_web_development/Core).
- "Zweite Welle"-Themen, die nützliche nächste Schritte für relative Anfänger\*innen darstellen, um weiterzugehen, sobald sie die Kernmodule beherrscht haben, in unseren [Erweiterungsmodulen](/de/docs/Learn_web_development/Extensions).

Learn ist nicht als der Ort auf MDN für einführende Inhalte zu _allen_ Themen gedacht. Das bedeutet, dass Nischenthemen wie MathML und Web Games sowie fortgeschrittene oder spezielle Themen wie reguläre Ausdrücke, Leistungstests, WebRTC und WebGPU nicht in Learn gehören.

Wenn Sie ein Thema sehen, das in Learn nicht behandelt wird und Sie denken, es sollte behandelt werden, versuchen Sie nicht, es einfach hinzuzufügen — diskutieren Sie es zuerst mit uns (siehe [Vorschläge für Inhalte](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content)).

## Ansatz

Um MDN Learn Webentwicklung-Inhalte zu erstellen und zu aktualisieren, sollten Sie in vielerlei Hinsicht denselben Ansatz wie für den Rest von MDN befolgen. Sie sollten denselben allgemeinen [Schreibstil-Leitfaden](/de/docs/MDN/Writing_guidelines/Writing_style_guide), [Code-Stil](/de/docs/MDN/Writing_guidelines/Code_style_guide) und [Techniken](/de/docs/MDN/Writing_guidelines/Howto) befolgen.

Es gibt jedoch einige Unterschiede:

- **Tutorial-Stil**: Die meisten MDN-Inhalte sind eine Mischung aus Referenzmaterialien und Leitfäden; Learn hingegen soll praxisorientierte Tutorials bieten. Wir haben keine strikte Vorlage für jede Seite, aber sie sollten so geschrieben sein, dass sie die Leser*innen an die Hand nehmen und durch eine Kombination aus Schritt-für-Schritt-Abschnitten und "Probieren Sie es aus"-Abschnitten führen. Diese sollten die Leser*innen dazu anleiten, sofort einzutauchen, Dinge auszuprobieren und Code zu schreiben. Siehe den "Probieren Sie es aus"-Abschnitt am Ende unserer [Suchmaschine](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#search_engine) Informationen, zum Beispiel. Diese werden mit dem folgenden Markdown erstellt:

  ```md
  > [!CALLOUT]
  >
  > **Try it out**
  >
  > Try this...
  ```

- **Herausforderungen**: Lerninhalte enthalten regelmäßig Herausforderungen, um zu testen, ob die Leser\*innen die besprochenen Themen verstanden haben, bevor sie mit dem nächsten Artikel fortfahren. Diese sind derzeit in einigen unterschiedlichen Stilen geschrieben, siehe zum Beispiel [Herausforderung: Strukturieren einer Inhaltsseite](/de/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) und [Testen Sie Ihre Fähigkeiten: HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images/Test_your_skills:_HTML_images), aber wir beabsichtigen, die Konsistenz und das Erlebnis dieser in Zukunft zu verbessern.
- **Dichte und Vollständigkeit**: MDN-Inhalte sind im Allgemeinen für ihre Vollständigkeit bekannt. Lerninhalte sind speziell nicht so vollständig wie die restlichen MDN-Inhalte. Sie sind weniger dicht und sanfter im Ansatz, um den Lernenden zu ermöglichen, nützliche Fähigkeiten zu erwerben und regelmäßig Fortschritte zu machen, ohne sich überfordert zu fühlen. Sie können später tiefer eintauchen. Lerninhalte können Details weglassen, um ein angenehmeres Lernumfeld zu schaffen, vorausgesetzt, es wird nichts Ungenaue oder schlechte Praxis gelehrt.
- **Stabile Lernziele**: Die Lernziele am Anfang jedes Tutorials bieten eine Zusammenfassung dessen, was jedes Tutorial lehrt, und bilden zusammen einen strukturierten Lehrplan für die Frontend-Webentwicklung. Es ist entscheidend, dass die Lernziele und die vermittelten Inhalte sowohl stabil als auch synchron bleiben, da der Inhalt ansonsten nicht als Grundlage für förmliches Lernen (zum Beispiel Bildungs- oder Zertifizierungskurse) vertrauenswürdig ist. Änderungen an den Lernzielen sollten daher langsam und nicht ohne triftigen Grund erfolgen. Wenn Sie versuchen, Inhalte hinzuzufügen, die nicht in den zugehörigen Lernzielen behandelt werden (oder umgekehrt), wird Ihr Pull-Request geschlossen. [Schlagen Sie zunächst etwas vor](/de/docs/MDN/Writing_guidelines/What_we_write#suggesting_content).

> [!NOTE]
> Wir führen ein [Changelog](/de/docs/Learn_web_development/Changelog), das alle bedeutenden Änderungen an den Lernzielen detailliert aufführt, damit Lehrkräfte alle Ressourcen, die auf MDN Learn basieren, auf dem neuesten Stand halten können.

## Partnerlinks und Einbettungen

Wie in unseren Richtlinien zu [externen Links](/de/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) umrissen, erlaubt MDN im Allgemeinen keine externen Links (oder Einbettungen), die den Anschein erwecken, kommerzielle Produkte oder Dienstleistungen zu unterstützen, oder auf Inhalte hinter einer Bezahlschranke verweisen. Dies soll das Risiko mindern, dass MDN-Inhalte an Vertrauen verlieren und aufgrund von Spam-Links weniger nützlich werden.

MDN's Learn-Inhalte haben jedoch einige Ausnahmen hierzu. Wir erlauben Links zu externen Inhalten (die möglicherweise kostenpflichtig sind) von bestimmten vertrauenswürdigen Partnerseiten. Dies sind Seiten, mit denen MDN eine vertrauensvolle Beziehung aufgebaut hat, indem die Qualität, Ethik und das Engagement für Webstandards und bewährte Praktiken gründlich untersucht wurden und ihnen geholfen wurde, ihre Inhalte zu aktualisieren, wo sie unseren Standards nicht entsprechen. Wir vertrauen darauf, dass sie ihre Links nicht ohne Vorankündigung ändern, und wir vertrauen darauf, dass ihre Inhalte sicher zu verlinken sind.

Der Zweck dieser Partnerlinks ist wie folgt:

- Zugang zu unterstützenden Inhalten bieten, die auf dem aufbauen, was auf unseren Seiten gelehrt wird.
- Zugang zu Multimedia-Lernerfahrungen bieten (Videos, Diashows, andere interaktive Inhalte), die MDN-Inhaltsteams nicht die Ressourcen haben, um zu produzieren. Wir konzentrieren uns auf Texte bei MDN, aber Menschen wünschen oft unterschiedliche Lernansätze.
- Einnahmen über Affiliate-Links für kostenpflichtige Inhaltsoptionen generieren, die wir investieren können, um MDN noch besser zu machen.

Allerdings:

- Werden wir diese Links nicht in einer Weise hinzufügen, die die Integrität von MDN-Inhalten gefährden und offen spammig sind; nur dort, wo wir fühlen, dass sie wirklich nützlich sind.
- Werden wir immer sicherstellen, dass eine kostenlose Option neben allem, was kostenpflichtig ist, verfügbar ist. In vielen Fällen haben wir unsere Partner überzeugt, bisher kostenpflichtige Inhalte kostenlos verfügbar zu machen.
- Markieren wir Partnerinhalte deutlich mit einem "MDN Lernpartner"-Label, damit Sie sie klar von anderen Links unterscheiden können.

### "Siehe auch" Link-Reihenfolge

Auf Learn-Inhaltsseiten sollten die "Siehe auch"-Links, die am Ende erscheinen, in der folgenden Reihenfolge erscheinen:

1. Interne Links.
2. Links zu kostenlosen Inhalten.
3. Links zu gemischten kostenlosen/bezahlschranken Inhalten.

### Aktuelle Bildungspartner

- [Scrimba](https://scrimba.com/home)
