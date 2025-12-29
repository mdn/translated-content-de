---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem gründlichen Blick auf das, was Barrierefreiheit ist — dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge unterschiedliche Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Sinn von Barrierefreiheit — erhöhter Zugang zu digitalen Dienstleistungen für Menschen mit zusätzlichen Bedürfnissen, verbesserte Usability für alle, bessere SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in einem Projekt berücksichtigt werden sollte und nicht erst am Ende hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und ihren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites barrierefrei zu machen, kommt auch anderen Gruppen zugute, wie zum Beispiel Menschen mit mobilen Geräten oder Menschen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die gleichwertige Behandlung aller Menschen betrachten, indem ihnen gleiche Chancen geboten werden, egal welche Fähigkeiten oder Umstände sie haben. So wie es nicht richtig ist, jemanden von einem Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle verschieden, aber wir sind alle Menschen und haben daher dieselben Menschenrechte.

Barrierefreiheit ist der richtige Weg. Die Bereitstellung barrierefreier Websites ist in einigen Ländern gesetzlich vorgeschrieben, was erhebliche Märkte erschließen kann, die sonst Ihre Dienstleistungen nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Bau barrierefreier Websites nützt jedem:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO, was Ihre Website leichter auffindbar macht.
- Sich um Barrierefreiheit zu kümmern, zeigt gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken zur Verbesserung der Barrierefreiheit machen Ihre Website auch für andere Gruppen wie Smartphone-Nutzer oder Menschen mit geringer Netzwerkgeschwindigkeit nutzbarer. Tatsächlich kann jeder von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Orten auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, ebenso wie ihre Behinderungen. Die schlüssele Lektion hier ist, über den eigenen Computer und die eigene Web-Nutzung hinauszudenken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Benutzer_. Die Haupttypen von Behinderungen, die berücksichtigt werden müssen, werden unten erklärt, zusammen mit den speziellen Werkzeugen, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **assistive Technologien** oder **ATs**).

> [!NOTE]
> Das Informationsblatt der Weltgesundheitsorganisation [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) erklärt, dass "über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung haben" und "zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche funktionelle Schwierigkeiten haben."

### Menschen mit Sehbeeinträchtigungen

Menschen mit Sehbeeinträchtigungen umfassen Menschen mit Blindheit, geringem Sehvermögen und Farbenblindheit. Viele Menschen mit Sehbeeinträchtigungen nutzen Bildschirmvergrößerer, die entweder physische Vergrößerungsgeräte oder Softwarezoomfunktionen sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoomfunktionen. Einige Benutzer werden auf Bildschirmlesegeräte angewiesen sein, das sind Softwareprogramme, die digitale Texte laut vorlesen. Einige Beispiele für Bildschirmlesegeräte sind:

- Kostenpflichtige kommerzielle Produkte, wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesegeräten vertraut zu machen; Sie sollten auch ein Bildschirmlesegerät einrichten und damit herumspielen, um eine Vorstellung davon zu bekommen, wie es funktioniert. Siehe unsere [Bildschirmlesegerät-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Nutzung. Das untenstehende Video bietet auch ein kurzes Beispiel dafür, wie die Erfahrung ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "285 Millionen Menschen weltweit als sehbehindert gelten: 39 Millionen sind blind und 246 Millionen haben eingeschränktes Sehvermögen." (siehe [Visuelle Beeinträchtigung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzerbasis, die man einfach verpassen könnte, weil Ihre Website nicht ordnungsgemäß kodiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbeeinträchtigungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Stufen von Hörverlust von mild bis schwerwiegend. Obwohl einige AT verwenden (siehe [Hilfsmittel für Menschen mit Hör-, Sprach-, Sprech- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind diese nicht weit verbreitet.

Um Zugang zu bieten, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audioinhalte bereitgestellt werden. Außerdem sollte die [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/) aufgrund hoher Raten von [Sprachentzug](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen.

Taube und schwerhörige Menschen stellen auch eine bedeutende Nutzerbasis dar — "466 Millionen Menschen weltweit haben eine behindernde Hörminderung", sagt das [Informationsblatt der Weltgesundheitsorganisation zu Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen in Bezug auf Bewegung, was rein physische Probleme (wie den Verlust eines Körperteils oder eine Lähmung) oder neurologische/genetische Störungen, die zu Schwäche oder Verlust der Kontrolle über Gliedmaßen führen, umfassen könnte. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen zu machen, die zum Gebrauch einer Maus erforderlich sind, während andere schwerwiegender betroffen sein könnten und vielleicht so stark gelähmt sind, dass sie einen [Kopfstab](https://www.performancehealth.com/adjustable-headpointer) zur Interaktion mit Computern verwenden müssen.

Diese Art von Behinderung kann auch durch das Alter statt durch ein bestimmtes Trauma oder eine bestimmte Erkrankung verursacht werden, und es könnte auch durch Hardware-Einschränkungen kommen — einige Benutzer haben möglicherweise keine Maus.

Wie sich dies in der Regel auf die Webentwicklung auswirkt, ist die Anforderung, dass Steuerelemente über die Tastatur zugänglich sind — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie es geht. Können Sie zum Beispiel mit der Tabulatortaste zwischen den verschiedenen Steuerelementen eines Webformulars navigieren? Sie finden mehr Details zu Tastatursteuerungen in unserem Abschnitt [Verwende semantische UI-Steuerelemente, wo möglich](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Hinblick auf Statistiken haben eine bedeutende Anzahl von Menschen Mobilitätsbeeinträchtigungen. Die US-Centers for Disease Control and Prevention [Disability and Functioning (Nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten der USA "Prozentsatz der Erwachsenen mit irgendwelchen funktionellen Schwierigkeiten: 16,1%".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen beziehen sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die die am meisten eingeschränkten Fähigkeiten haben, bis zu allen von uns, wenn wir altern und Schwierigkeiten haben, zu denken und uns zu erinnern. Die Palette umfasst Menschen mit psychischen Erkrankungen, wie [Depression](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Sie umfasst auch Menschen mit Lernbehinderungen, wie [Legasthenie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es zwar eine große Vielfalt innerhalb der klinischen Definitionen von kognitiven Beeinträchtigungen gibt, die Betroffenen jedoch eine gemeinsame Reihe von funktionellen Problemen erleben. Dazu gehören Schwierigkeiten beim Verständnis von Inhalten, beim Erinnern an Aufgaben und Verwirrung durch inkonsistente Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten in mehr als einer Weise, wie durch Text-zu-Sprache oder durch Video.
- Leicht verständliche Inhalte, wie Texte, die nach Standards für einfache Sprache geschrieben sind.
- Konzentration der Aufmerksamkeit auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau, wenn nicht besucht, und in Lila, wenn besucht.
- Das Aufteilen von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeigen.
- Die Authentifizierung der Website so einfach wie möglich zu machen, ohne die Sicherheit zu beeinträchtigen.
- Formulare einfach auszufüllen zu machen, etwa mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Entwerfen mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) wird zu guten Designpraktiken führen. Sie werden allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich der [kognitiven Barrierefreiheit-Richtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Arbeitsgruppe zu kognitiven und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erstellt Webzugänglichkeitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Kognitionsseite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die United States Centers for Disease Control schätzten, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hatte und davon [kognitive Beeinträchtigung die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html) war.
- In den USA wurden einige intellektuelle Behinderungen historisch als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff jetzt als herabwürdigend, sodass auf seine Verwendung verzichtet werden sollte.
- Im Vereinigten Königreich werden einige intellektuelle Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein häufiger Mythos über Barrierefreiheit ist, dass diese ein teures "zusätzliches Extra" zur Implementierung in einem Projekt ist. Dieser Mythos kann tatsächlich _wahr_ sein, wenn:

- Sie versuchen, Barrierefreiheit "nachträglich" zu einer bestehenden Website hinzuzufügen, die erhebliche Barrierefreiheitsprobleme hat.
- Sie erst in den späten Phasen eines Projekts beginnen, Barrierefreiheit zu berücksichtigen, und damit verbundene Probleme aufdecken.

Wenn Sie jedoch Barrierefreiheit von Anfang an in einem Projekt berücksichtigen, sollten die Kosten für die Zugänglichmachung der meisten Inhalte relativ gering sein.

Wenn Sie Ihr Projekt planen, berücksichtigen Sie Barrierefreiheitstests in Ihrem Testregime, genauso wie Sie für jede andere wichtige Zielgruppensegmentierung testen (z.B. Ziel-Desktop- oder Mobile-Browser). Testen Sie früh und oft, idealerweise indem Sie automatisierte Tests ausführen, um programmatisch erkennbare fehlende Funktionen zu erfassen (wie fehlender Bild [Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechter Linktext — siehe [Verwenden Sie sinnvolle Textbezeichnungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und einige Tests mit behinderten Benutzergruppen durchführen, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumsauswahl-Widget für Menschen, die Bildschirmlesegeräte verwenden, nutzbar?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Berührungsschnittstellennutzer zugänglich?

Sie können und sollten Probleme mit Inhalten, die Arbeit erfordern, um zugänglich zu sein, notieren, sicherstellen, dass sie gründlich getestet werden, und Lösungen/Alternativen überlegen. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten sich Ihr Projektbudget ansehen und darüber nachdenken, welche Lösungen Sie haben, um solche Inhalte zugänglich zu machen. Alle Ihre Multimedia-Inhalte zu transkribieren, ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — Sie werden immer auf irgendeinen Randfall stoßen, bei dem ein bestimmter Benutzer bestimmte Inhalte schwer zu nutzen findet — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, eine beeindruckende 3D-Diagrammgrafik mit WebGL zu inkludieren, könnten Sie in Betracht ziehen, eine Datentabelle als barrierefreie alternative Darstellung der Daten zu inkludieren. Oder Sie könnten einfach die Tabelle einfügen und das 3D-Diagramm weglassen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu warten.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Sie sich kümmern und über Barrierefreiheit nachgedacht haben, veröffentlichen Sie auf Ihrer Website eine Barrierefreiheitserklärung, die darlegt, was Ihre Richtlinie hinsichtlich Barrierefreiheit ist und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn jemand Sie darauf aufmerksam macht, dass Ihre Website ein Barrierefreiheitproblem hat, beginnen Sie einen Dialog mit ihnen, seien Sie empathisch und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Anfang an in einem Projekt und testen Sie früh und oft. Genau wie bei jedem anderen Bug wird ein Barrierefreiheitproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele der besten Praktiken für Barrierefreiheit jedem zugutekommen, nicht nur Benutzern mit Behinderungen. Zum Beispiel ist schlankes semantisches Markup nicht nur gut für Bildschirmlesegeräte, sondern es lädt auch schnell und ist performant. Dies kommt jedem zugute, insbesondere jenen auf mobilen Geräten und/oder mit langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und engagieren Sie sich mit Menschen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensets, auf denen Barrierefreiheitstests basieren können, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen, in denen Sie sorgfältig vorgehen müssen, vertraut zu machen und die hochrangigen Strukturen der für Sie am relevantesten Richtlinien zu verstehen.

- Zunächst hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) genannt, und sie sind definitiv keine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die angeben, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um sich leicht einzulesen und anzufangen, ist [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es gibt keinen Grund, alle WCAG-Kriterien zu lernen — seien Sie sich der wichtigsten Problembereiche bewusst und verwenden Sie eine Vielzahl von Techniken und Tools, um alle Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr Informationen).
- Ihr Land könnte auch spezifische Gesetzgebungen haben, die erfordern, dass Websites, die Ihrer Bevölkerung dienen, barrierefrei sein müssen — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Vereinbarung über barrierefreie Informationen](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/resources-for-organisations-businesses/disability-resources-employers/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C hält eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern bereit.

Also, während die WCAG ein Satz von Richtlinien ist, wird Ihr Land wahrscheinlich Gesetze zur Regulierung der Barrierefreiheit im Web haben, oder zumindest die Barrierefreiheit der für die Öffentlichkeit verfügbaren Dienstleistungen (was Websites, Fernsehen, physische Räume usw. umfassen könnte). Es ist eine gute Idee, sich zu informieren, welche Gesetze in Ihrem Land gelten. Wenn Sie sich keine Mühe geben, zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn Menschen sich beschweren.

Das klingt ernst, aber eigentlich müssen Sie Barrierefreiheit einfach als Hauptpriorität Ihrer Webentwicklungspraxis betrachten, wie oben beschrieben. Wenn Sie unsicher sind, holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden hier keinen weiteren Rat geben, da wir keine Anwälte sind.

## Barrierefreiheit-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt durch das zugrunde liegende Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs neigen dazu, überwiegend semantische Informationen zu nutzen, sodass diese Informationen keine Dinge wie Stilinformationen oder JavaScript umfassen. Diese Informationen sind in einem Strukturbaum von Informationen namens **Barrierefreiheitsbaum** organisiert.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs verfügbar:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility Framework
- iOS: UIAccessibility

Dort, wo die von den HTML-Elementen in Ihren Webanwendungen bereitgestellten nativen semantischen Informationen unzureichend sind, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die dem Barrierefreiheitsbaum semantische Informationen hinzufügen, um die Zugänglichkeit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Workflow integrieren können. Sie sollten nun auch den Wunsch haben, mehr über die Implementierungsdetails zu lernen, die Websites barrierefrei machen können, und welche Tools dabei helfen. Im nächsten Artikel werden wir uns mit Barrierefreiheits-Tools befassen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome veröffentlichte eine Autokapitonierungserweiterung](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
