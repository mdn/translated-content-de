---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Überblick darüber, was Barrierefreiheit ist — einschließlich der Gruppen von Menschen, die wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Zweck der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit besonderen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, bessere SEO und ein breiteres Zielpublikum.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an die Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an in ein Projekt einbezogen werden sollte und nicht nachträglich.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites barrierefrei zu gestalten, kommt auch anderen Gruppen zugute, wie zum Beispiel Nutzern mobiler Geräte oder solchen mit langsamen Netzwerkverbindungen.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller sehen, indem Sie ihnen ungeachtet ihrer Fähigkeiten oder Umstände gleiche Chancen bieten. So wie es falsch ist, jemanden aus einem physischen Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle unterschiedlich, aber wir sind alle menschlich und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern ist die Bereitstellung barrierefreier Websites Teil des Gesetzes, was bedeutende Märkte eröffnen kann, die Ihre Dienste ansonsten nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Aufbau barrierefreier Websites kommt jedem zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO und macht Ihre Website besser auffindbar.
- Sich um Barrierefreiheit zu kümmern, demonstriert gute Ethik und Moral und verbessert Ihr öffentliches Image.
- Andere bewährte Praktiken, die die Barrierefreiheit verbessern, machen die Website auch für andere Gruppen zugänglicher, z. B. für Benutzer von Mobiltelefonen oder Personen mit geringer Netzwerkgeschwindigkeit. Tatsächlich können alle von solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es an einigen Orten auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so sind es auch ihre Behinderungen. Die Hauptlektion hier besteht darin, über Ihren eigenen Computer und die Art und Weise, wie Sie das Internet nutzen, hinauszudenken und zu lernen, wie andere es nutzen – _Sie sind nicht Ihre Benutzer_. Die Haupttypen von Behinderungen, die in Betracht gezogen werden sollten, werden im Folgenden erklärt, zusammen mit den speziellen Tools, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **Hilfstechnologien** oder **ATs**).

> [!NOTE]
> Das Faktenblatt der Weltgesundheitsorganisation zum Thema [Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) besagt, dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, irgendeine Form von Behinderung haben", und "zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Schwierigkeiten im Alltag".

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Personen mit Blindheit, eingeschränktem Sehvermögen und Farbenblindheit. Viele Menschen mit Sehbehinderungen nutzen Bildschirmvergrößerer, die entweder physische Vergrößerer oder Software-Zoom-Fähigkeiten sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoom-Fähigkeiten. Einige Benutzer sind auf Screenreader angewiesen, Software, die digitalen Text vorliest. Einige Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und damit herumspielen, um ein Gefühl dafür zu bekommen, wie er funktioniert. In unseren [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) finden Sie weitere Details zur Verwendung. Das unten stehende Video bietet auch ein kurzes Beispiel dafür, wie die Erfahrung aussieht.

{{EmbedYouTube("IK97XMibEws")}}

Was die Statistik betrifft, schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen als sehbehindert gelten: 39 Millionen sind blind und 246 Millionen haben eine Sehbehinderung." (siehe [Visuelle Beeinträchtigung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die man einfach auslassen würde, wenn Ihre Website nicht richtig codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und Schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Grade von Hörverlust, die von mild bis tiefgehend reichen. Obwohl einige Hilfstechnologie (AT) verwenden (siehe [Hilfsgeräte für Menschen mit Hör-, Sprach-, Sprach- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu gewähren, müssen textuelle Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und für Audioinhalte sollten Transkripte bereitgestellt werden. Aufgrund der hohen Levels von [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen sollte auch [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine signifikante Nutzerbasis dar — "466 Millionen Menschen weltweit haben einen behindernden Hörverlust", sagt das Faktenblatt der Weltgesundheitsorganisation zur [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben Behinderungen, die die Bewegung betreffen, was rein physische Probleme (wie den Verlust einer Extremität oder Lähmungen) oder neurologische/genetische Störungen umfassen kann, die zu Schwäche oder Kontrollverlust in den Gliedmaßen führen. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen auszuführen, die zur Nutzung einer Maus erforderlich sind, während andere schwerer betroffen sein könnten, vielleicht so sehr, dass sie ein [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) zum Interagieren mit Computern benötigen.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder Zustands, und es könnte auch durch Hardware-Einschränkungen entstehen — einige Benutzer haben möglicherweise keine Maus.

Die Auswirkungen auf die Webentwicklung betreffen in der Regel die Anforderung, dass Steuerungen über die Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls ausführlicher besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie zurechtkommen. Können Sie beispielsweise die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerelementen eines Webformulars zu wechseln? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt über [UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#ui_controls).

In Bezug auf die Statistik haben viele Menschen Mobilitätseinschränkungen. Die US-amerikanischen Centers for Disease Control and Prevention berichten in der Studie [Behinderung und Funktion (Nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm), dass "16,1% der US-Erwachsenen Schwierigkeiten mit der körperlichen Funktionsweise haben".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen bezeichnen eine breite Palette von Behinderungen, von Menschen mit geistiger Behinderung, die über die am stärksten eingeschränkten Fähigkeiten verfügen, bis hin zu uns allen, die im Alter Schwierigkeiten haben, zu denken und sich zu erinnern. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Sie umfasst auch Menschen mit Lernschwierigkeiten, wie [Legasthenie](https://www.ninds.nih.gov/health-information/disorders/learning-disabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung (ADHS)](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Obwohl es innerhalb klinischer Definitionen kognitiver Beeinträchtigungen eine große Vielfalt gibt, erleben Menschen mit ihnen eine gemeinsame Reihe funktioneller Probleme. Dazu zählen Schwierigkeiten beim Verstehen von Inhalten, sich an Aufgaben zu erinnern oder sich durch inkonsistente Webseitenlayouts verwirren zu lassen.

Eine gute Grundlage für die Barrierefreiheit von Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als einem Weg, z.B. durch Text-to-Speech oder Video.
- Leicht verständliche Inhalte, wie Text, der nach einfachsprachigen Standards geschrieben ist.
- Aufmerksamer Fokus auf wichtigen Inhalten.
- Minimierung von Ablenkungen, wie unnötigen Inhalten oder Anzeigen.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau, wenn unbesucht, und in Lila, wenn besucht.
- Prozesse in logische, wesentliche Schritte mit Fortschrittsanzeigen aufteilen.
- Benutzerfreundliche Website-Authentifizierung ohne Beeinträchtigung der Sicherheit.
- Formulare leicht ausfüllbar machen, z.B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Cognitive_accessibility) wird zu guten Designpraktiken führen, von denen jeder profitiert.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) der W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Cognitive_accessibility#wcag_guidelines).
- Die W3C [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) entwickelt Richtlinien zur Web-Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM verfügt über eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die United States Centers for Disease Control schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hatte und unter ihnen [kognitive Beeinträchtigungen die häufigsten bei jungen Menschen sind](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige geistige Behinderungen historisch als "geistige Zurückgebliebenheit" bezeichnet. Viele betrachten diesen Begriff jetzt als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige geistige Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein weit verbreiteter Mythos über Barrierefreiheit ist, dass ihre Implementierung in ein Projekt eine teure "zusätzliche" Anforderung darstellt. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit nachträglich auf eine bestehende Website aufzubringen, die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie beginnen erst spät im Projektverlauf, Barrierefreiheit in Betracht zu ziehen und entdecken damit verbundene Probleme.

Wenn Sie jedoch von Anfang an Barrierefreiheit berücksichtigen, sollten die Kosten für die Bereitstellung der meisten Inhalte in barrierefreier Form recht gering sein.

Beim Planen Ihres Projekts sollten Sie Barrierefreiheitstests in Ihr Testregime einbeziehen, genauso wie beim Testen für andere wichtige Zielgruppen (z.B. Ziel-Desktop- oder Mobilbrowser). Testen Sie früh und oft, idealerweise mit automatisierten Tests, um programmatisch erkennbare fehlende Funktionen zu identifizieren (wie fehlender Bild-Alternativtext oder schlechter Linktext — siehe [Bedeutungsvolle Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#meaningful_text_labels)) und auch einige Tests mit Benutzergruppen mit Behinderungen durchführen, um zu sehen, wie gut komplexere Website-Funktionen für sie arbeiten. Zum Beispiel:

- Ist mein Dateipicker-Widget für Benutzer von Screenreadern nutzbar?
- Wissen sehbehinderte Personen über dynamisch aktualisierte Inhalte Bescheid?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Touch-Nutzer zugänglich?

Sie können und sollten Notizen zu potenziellen Problemfeldern in Ihren Inhalten machen, die Arbeit benötigen, um sie barrierefrei zu gestalten, diese gründlich testen und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber wie sieht es mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken aus? Sie sollten Ihr Projektbudget überprüfen und über die verfügbaren Lösungen nachdenken, um solche Inhalte zugänglich zu machen. Eine Möglichkeit, alle Ihre Multimedia-Inhalte transkribieren zu lassen, wäre eine Option, die, obwohl teuer, machbar ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — Sie werden immer auf irgendeine Art von Grenzfall stoßen, bei dem ein bestimmter Benutzer bestimmte Inhalte schwer nutzen kann — aber Sie sollten so viel wie möglich tun. Wenn Sie vorhaben, ein faszinierendes 3D-Tortendiagramm mit WebGL zu erstellen, könnten Sie eine Datentabelle als zugängliche Alternativdarstellung der Daten hinzufügen. Oder Sie könnten nur die Tabelle einfügen und das 3D-Tortendiagramm weglassen — die Tabelle ist für alle zugänglich, schneller zu programmieren, weniger CPU-intensiv und leichter zu warten.

Auf der anderen Seite, wenn Sie an einer Galerieseite arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunststück perfekt für sehbehinderte Menschen zugänglich ist, da es ein vollständig visuelles Medium ist.

Um zu zeigen, dass Ihnen Barrierefreiheit am Herzen liegt und dass Sie darüber nachgedacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, in der Sie erläutern, wie Ihre Haltung zur Barrierefreiheit aussieht und welche Schritte Sie unternommen haben, um die Website barrierefrei zu gestalten. Wenn jemand Sie darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, gehen Sie auf ihn zu, seien Sie einfühlsam und unternehmen Sie angemessene Schritte, um das Problem zu lösen.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Anfang an in Ihrem Projekt und testen Sie früh und oft. Genau wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele bewährte Praktiken der Barrierefreiheit jedem zugutekommen, nicht nur Nutzern mit Behinderungen. Zum Beispiel ist schlankes semantisches Markup nicht nur gut für Screenreader, sondern auch schnell zu laden und performant. Dies kommt allen zugute, insbesondere Menschen mit mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und setzen Sie sich mit Menschen, die Probleme haben, auseinander.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze als Grundlage für Barrierefreiheitstests, die auf den ersten Blick überwältigend erscheinen könnten. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, in denen Sie vorsichtig sein müssen, sowie die hochrangigen Strukturen der für Sie relevantesten Richtlinien zu verstehen.

- Zu Beginn hat das W3C ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieneutrale Kriterien für die Barrierefreiheitskonformität enthält. Diese sind als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bekannt und sie sind nicht gerade leichter Lesestoff. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort für einen leichten Einstieg und Beginn des Lernens ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht notwendig, alle WCAG-Kriterien zu erlernen — Sie sollten sich jedoch der wichtigsten Bereiche bewusst sein und eine Vielzahl von Techniken und Tools verwenden, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land hat möglicherweise auch spezifische Gesetze, die die Notwendigkeit regeln, dass Websites, die Ihre Bevölkerung bedienen, barrierefrei sein müssen — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, die [Bundesverordnung über barrierefreie Informationstechnologie](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/world-wide-web-access-disability-discrimination-act-advisory-notes-ver) in Australien usw. Das W3C führt eine Liste der [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also eine Reihe von Richtlinien sind, wird Ihr Land wahrscheinlich Gesetze zur Web-Barrierefreiheit haben, oder zumindest zur Barrierefreiheit von öffentlich zugänglichen Diensten (wobei dies Websites, Fernsehen, physische Räume usw. einschließen könnte). Es ist eine gute Idee, herauszufinden, welche Gesetze in Ihrem Land gelten. Wenn Sie keine Anstrengungen unternehmen, um sicherzustellen, dass Ihre Inhalte barrierefrei sind, könnten Sie rechtlich haftbar sein, wenn Leute sich beschweren.

Das klingt ernst, aber Sie müssen Barrierefreiheit einfach als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Im Zweifelsfall holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden nicht mehr Ratschläge als diesen geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen bereitstellen, die für Hilfstechnologien (ATs) nützlich sind — ATs neigen hauptsächlich dazu, semantische Informationen zu nutzen, sodass diese Informationen keine Stylinginformationen oder JavaScript enthalten. Diese Informationen sind in einer Baumstruktur organisiert, die als **Barrierefreiheitsbaum** bezeichnet wird.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility Framework
- iOS: UIAccessibility

Wo die native semantische Information, die von den HTML-Elementen in Ihren Web-Apps bereitgestellt wird, unzureichend ist, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel zu [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über die Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch den Wunsch haben, mehr über die Implementierungsdetails zu erfahren, die Websites barrierefrei machen können, und welche Tools dabei helfen können. Im nächsten Artikel werden wir uns die Werkzeuge für die Barrierefreiheit ansehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Understanding_WCAG/Robust)

- [Google Chrome hat eine automatisierte Untertitelerweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
