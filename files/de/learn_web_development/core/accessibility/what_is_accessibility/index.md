---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem umfassenden Blick auf das Thema Barrierefreiheit — diese Übersicht beinhaltet, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit besonderen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und eine breitere Zielgruppe.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen zur Barrierefreiheit.</li>
          <li>Barrierefreiheit sollte von Beginn eines Projekts an berücksichtigt werden und nicht nachträglich hinzugefügt werden.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so nutzbar wie möglich für so viele Menschen wie möglich zu machen. Traditionell denken wir, dass es hierbei um Menschen mit Behinderungen geht, aber die Praxis, Seiten zugänglich zu machen, kommt auch anderen Gruppen zugute, wie z.B. denen, die mobile Geräte nutzen oder eine langsame Internetverbindung haben.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller und als Gleichheit der Chancen betrachten, unabhängig von ihrer Fähigkeit oder ihren Umständen. Ebenso wie es falsch ist, jemanden aus einem physischen Gebäude auszusperren, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige zu tun. In einigen Ländern ist die Bereitstellung zugänglicher Websites gesetzlich vorgeschrieben, was einige bedeutende Märkte eröffnen kann, die andernfalls Ihre Dienste nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Bau barrierefreier Websites kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO, wodurch Ihre Website leichter auffindbar wird.
- Die Beachtung von Barrierefreiheit zeugt von guten ethischen und moralischen Grundsätzen, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, wie z.B. Benutzer von Mobiltelefonen oder solche mit niedriger Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen solcher Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Ländern auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so auch ihre Behinderungen. Die wichtigste Lektion hier ist, über Ihren eigenen Computer hinaus zu denken und zu lernen, wie andere das Web nutzen — _Sie sind nicht Ihre Nutzer_. Die Hauptarten von Behinderungen, die es zu berücksichtigen gilt, werden im Folgenden erklärt, zusammen mit speziellen Werkzeugen, die sie zur Nutzung von Web-Inhalten verwenden (bekannt als **assistive Technologien** oder **ATs**).

> [!NOTE]
> Das Faktenblatt der Weltgesundheitsorganisation [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben" und "Zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Funktionsschwierigkeiten".

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen blinde Menschen, Menschen mit geringer Sehkraft und Menschen mit Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerer, die entweder physische Vergrößerer oder Software-Zoom-Möglichkeiten sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoom-Funktionen. Einige Benutzer werden auf Bildschirmleser angewiesen sein, was Software ist, die digitalen Text laut vorliest. Beispiele für Bildschirmleser sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesern vertraut zu machen; Sie sollten auch einen Bildschirmleser einrichten und damit experimentieren, um eine Vorstellung davon zu bekommen, wie er funktioniert. Siehe unsere [Bildschirmleser-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Nutzung dieser. Das untenstehende Video bietet ebenfalls ein kurzes Beispiel dafür, wie die Erfahrung aussieht.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit schätzungsweise 285 Millionen Menschen sehbehindert sind: 39 Millionen sind blind und 246 Millionen haben geringe Sehkraft." (siehe [Visual impairment and blindness](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die einfach ausgelassen wird, weil Ihre Website nicht ordnungsgemäß codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Gehörlose und schwerhörige Menschen (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) haben unterschiedliche Grade von Hörverlust, die von mild bis schwer reichen. Obwohl einige von ihnen AT verwenden (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um den Zugang zu ermöglichen, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden und es sollten Transkripte für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund des hohen Maßes an [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen [Textvereinfachung berücksichtigt werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Gehörlose und schwerhörige Menschen vertreten ebenfalls eine bedeutende Nutzerschaft — "466 Millionen Menschen weltweit haben eine beeinträchtigende Hörschwäche", besagt das Faktenblatt der Weltgesundheitsorganisation [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbehinderungen

Diese Menschen haben Behinderungen in Bezug auf Bewegung, die rein physische Probleme betreffen können (z.B. Verlust eines Glieds oder Lähmung) oder neurologische/genetische Störungen, die zu Schwäche oder Kontrollverlust in den Gliedmaßen führen. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen zu machen, die zum Bedienen einer Maus erforderlich sind, während andere möglicherweise stärker betroffen sind, möglicherweise so stark gelähmt, dass sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch eine Folge des Alters sein, statt von einem spezifischen Trauma oder Zustand, und es könnte auch durch Hardware-Einschränkungen verursacht werden — einige Benutzer haben möglicherweise keine Maus.

Die Art und Weise, wie sich dies auf die Webentwicklungsarbeit auswirkt, ist die Anforderung, dass Steuerungen über die Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln dieses Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie gut Sie zurechtkommen. Können Sie mit der Tabulatortaste zwischen den verschiedenen Steuerungen eines Webformulars wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt über [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls).

In Bezug auf Statistiken haben eine erhebliche Anzahl von Menschen Mobilitätsbehinderungen. Die US Centers for Disease Control and Prevention [Disability and Functioning (Nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass in den USA "16,1% der Erwachsenen mit einer physischen Funktionsstörung" leben.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen umfassen ein breites Spektrum von Behinderungen, von Menschen mit geistigen Behinderungen, die die am meisten eingeschränkten Fähigkeiten haben, bis hin zu uns allen, die mit dem Alter Schwierigkeiten beim Denken und Erinnern haben. Dies beinhaltet Menschen mit psychischen Erkrankungen, wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen, wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es, obwohl es eine große Vielfalt klinischer Definitionen für kognitive Beeinträchtigungen gibt, eine gemeinsame Reihe von funktionalen Problemen gibt, die Menschen mit diesen erleben. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern an die Durchführung von Aufgaben, und Verwirrung durch inkonsistente Webseitenlayouts.

Eine gute Basis für die Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Weise, z.B. durch Text-to-Speech oder Video.
- Leicht verständliche Inhalte, wie Texte, die den Standards für einfache Sprache entsprechen.
- Fokussierung der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötigen Inhalten oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau für unbesuchte und in Lila für besuchte Links.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Website-Authentifizierung so einfach wie möglich zu gestalten, ohne die Sicherheit zu gefährden.
- Formulare einfach ausfüllbar zu machen, z.B. mit klaren Fehlermeldungen und einfacher Fehlerkorrektur.

### Hinweise

- Das Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Sie werden für alle von Vorteil sein.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) der W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) der W3C erstellt Richtlinien zur Web-Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für Krankheitskontrolle schätzen, dass 2018 1 von 4 US-Bürgern eine Behinderung hatten und davon [kognitive Beeinträchtigungen am häufigsten bei jungen Menschen sind](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige geistige Behinderungen historisch als "geistige Retardierung" bezeichnet. Viele halten diesen Begriff mittlerweile für abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige geistige Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Barrierefreiheit in Ihr Projekt integrieren

Ein weit verbreiteter Mythos über Barrierefreiheit ist, dass Barrierefreiheit eine teure "zusätzliche Hinzufügung" ist, die in ein Projekt implementiert werden muss. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website "nachzurüsten", die erhebliche Zugänglichkeitsprobleme hat.
- Sie beginnen erst, sich mit Barrierefreiheit zu befassen, und entdecken damit verbundene Probleme erst in den späten Phasen eines Projekts.

Wenn Sie jedoch die Barrierefreiheit von Anfang an in ein Projekt einbeziehen, sollten die Kosten, um die meisten Inhalte zugänglich zu machen, relativ gering sein.

Bei der Planung Ihres Projekts sollten Sie Barrierefreiheitstests in Ihren Testablauf einbeziehen, ebenso wie Tests für jede andere wichtige Zielgruppen-Segmentierung (z.B. Ziel-Desktop- oder Mobile-Browser). Testen Sie früh und oft, idealerweise mit automatisierten Tests zur Erkennung programmatisch erkennbarer fehlender Funktionen (wie fehlendem Bild-[Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechtem Linktext — siehe [Bedeutungsvolle Textlabels](/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels)) und führen Sie einige Tests mit Gruppen von Menschen mit Behinderungen durch, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumswähler-Widget für Menschen, die Bildschirmleser nutzen, benutzbar?
- Wenn sich Inhalte dynamisch aktualisieren, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Touch-Oberflächenbenutzer zugänglich?

Sie können und sollten mögliche Problembereiche in Ihren Inhalten notieren, die Arbeit erfordern, um zugänglich zu sein, sicherstellen, dass diese gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten Ihr Projektbudget prüfen und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Alle Ihre Multimedia-Inhalte transkribieren zu lassen, ist eine Option, die zwar teuer, aber möglich ist.

Seien Sie jedoch realistisch. "100 % Barrierefreiheit" ist ein unerreichbares Ideal — es wird immer irgendeinen Randfall geben, der dazu führt, dass ein bestimmter Nutzer bestimmte Inhalte schwer verwenden kann — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein beeindruckendes 3D-Tortendiagramm-Grafik mit WebGL zu erstellen, möchten Sie vielleicht eine Datentabelle als zugängliche alternative Darstellung der Daten einfügen. Oder Sie könnten einfach die Tabelle einfügen und das 3D-Tortendiagramm entfernen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu pflegen.

Wenn Sie hingegen an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unzumutbar zu erwarten, dass jedes Kunstwerk perfekt zugänglich für sehbehinderte Menschen ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Sie sich kümmern und über Barrierefreiheit nachgedacht haben, veröffentlichen Sie eine Zugangserklärung auf Ihrer Website, die darlegt, was Ihre Richtlinien zur Barrierefreiheit sind und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn Ihnen jemand mitteilt, dass Ihre Website ein Zugänglichkeitsproblem hat, beginnen Sie einen Dialog mit ihm, zeigen Sie Empathie und ergreifen Sie angemessene Maßnahmen, um das Problem zu beheben.

Zusammenfassend:

- Betrachten Sie die Barrierefreiheit von Anfang an bei einem Projekt und testen Sie früh und oft. Wie bei jedem anderen Fehler wird ein Zugänglichkeitsproblem umso teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele bewährte Praktiken der Barrierefreiheit allen zugutekommen, nicht nur den Nutzern mit Behinderungen. Zum Beispiel ist schlanker, semantischer Code nicht nur gut für Bildschirmleser, sondern auch schnell zu laden und leistungsstark. Dies kommt allen zugute, insbesondere denen auf mobilen Geräten und/oder mit langsamen Verbindungen.
- Veröffentlichen Sie eine Zugangserklärung auf Ihrer Website und treten Sie in Kontakt mit Menschen, die Probleme haben.

## Richtlinien zur Barrierefreiheit und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensets, auf die Barrierefreiheitstests basieren können, die auf den ersten Blick überwältigend erscheinen könnten. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie vorsichtig sein müssen, sowie die hohen Strukturen der Richtlinien zu verstehen, die für Sie am relevantesten sind.

- Zuallererst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Konformität mit der Barrierefreiheit enthält. Diese werden als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet und sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die festlegen, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ausgangspunkt, um eine leichte Einführung zu erhalten und mit dem Lernen zu beginnen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu erlernen — seien Sie sich der wichtigsten Bereiche bewusst und nutzen Sie eine Vielzahl von Techniken und Werkzeugen, um auf Bereiche hinzuweisen, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land könnte auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihre Bevölkerung bedienen, zugänglich sein müssen — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnik-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services) in Australien, etc. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also eine Reihe von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze zur Regelung der Web-Zugänglichkeit haben oder zumindest für die Zugänglichkeit von Diensten, die der Öffentlichkeit zugänglich sind (was Websites, Fernsehen, physische Räume usw. einschließen könnte). Es ist eine gute Idee, herauszufinden, was Ihre Gesetze sind. Wenn Sie keinen Versuch unternehmen, Ihren Inhalt auf Zugänglichkeit zu prüfen, könnten Sie rechtlich haftbar sein, wenn Leute sich beschweren.

Das klingt ernst, aber eigentlich müssen Sie nur die Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Im Zweifelsfall lassen Sie sich von einem qualifizierten Anwalt beraten. Wir werden hier kein weiteres

- Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit auf hohem Niveau gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist und wie Sie sie in Ihren Workflow integrieren können. Sie sollten nun auch den Wunsch verspüren, mehr über die Implementierungsdetails zu erfahren, die Websites zugänglich machen können, und welche Werkzeuge dabei helfen können. Wir werden uns im nächsten Artikel mit der Barrierefreiheitst3echnik befassen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Perceivable](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Operable](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Understandable](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome veröffentlichte eine automatische Untertitel-Erweiterung](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
