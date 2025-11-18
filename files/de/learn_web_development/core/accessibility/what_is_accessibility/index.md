---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem genauen Blick darauf, was Barrierefreiheit ist – diese Übersicht umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit zu einem Teil unseres Webentwicklungs-Workflows machen können.

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
          <li>Der Zweck der Barrierefreiheit – erhöhter Zugang zu digitalen Dienstleistungen für Menschen mit besonderen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und eine breitere Zielgruppe.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen der Barrierefreiheit.</li>
          <li>Die Erkenntnis, dass Barrierefreiheit von Anfang an bei einem Projekt berücksichtigt werden sollte und nicht erst am Ende hinzugefügt wird.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so nutzbar wie möglich für so viele Menschen wie möglich zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis der Zugänglichkeit kommt auch anderen Gruppen zugute, wie zum Beispiel denen, die mobile Geräte verwenden oder mit langsamen Netzverbindungen arbeiten.

Man könnte Barrierefreiheit auch als Gleichbehandlung aller betrachten, indem allen die gleichen Chancen unabhängig von ihren Fähigkeiten oder Umständen gegeben werden. Ebenso wie es falsch ist, jemanden aufgrund eines Rollstuhls von einem Gebäude auszuschließen (moderne öffentliche Gebäude haben in der Regel Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden aufgrund einer Sehbehinderung von einer Website auszuschließen. Wir alle sind unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. Die Bereitstellung barrierefreier Websites ist in einigen Ländern gesetzlich verankert und kann signifikante Märkte öffnen, die ansonsten Ihre Dienstleistungen nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Bau barrierefreier Websites bringt jedem Vorteile:

- Semantisches HTML, das die Zugänglichkeit verbessert, verbessert auch das SEO und macht Ihre Website besser auffindbar.
- Die Berücksichtigung von Barrierefreiheit zeigt gute Ethik und Moral und verbessert Ihr öffentliches Image.
- Andere gute Praktiken, die die Zugänglichkeit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, wie z.B. Benutzer von Mobiltelefonen oder Personen mit niedriger Netzwerkgeschwindigkeit. Tatsächlich kann jeder von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Regionen auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so sind auch ihre Behinderungen. Die wichtigste Erkenntnis hier ist, über den eigenen Computer und die eigene Nutzung des Webs hinaus zu denken und zu lernen, wie andere es nutzen — _Sie sind nicht Ihre Nutzer_. Die Hauptarten von Behinderungen, die berücksichtigt werden müssen, sind unten erklärt, zusammen mit den speziellen Werkzeugen, die sie für den Zugang zu Webinhalten verwenden (bekannt als **Assistive Technologien** oder **ATs**).

> [!NOTE]
> Das [Datenblatt zu Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) der Weltgesundheitsorganisation besagt, dass „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, eine Form von Behinderung haben“ und „zwischen 110 und 190 Millionen Erwachsene erhebliche Funktionsbeeinträchtigungen haben“.

### Menschen mit Sehbehinderungen

Zu den Menschen mit Sehbehinderungen gehören Blinde, Menschen mit Sehschwäche und Farbenblinde. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerer, die physische Vergrößerungen oder Software-Zoommöglichkeiten sind. Die meisten Browser und Betriebssysteme haben heutzutage Zoomfunktionen. Einige Benutzer sind auf Bildschirmleseprogramme angewiesen, das sind Softwareprogramme, die digitalen Text laut vorlesen. Beispiele für Bildschirmleseprogramme sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmleseprogrammen vertraut zu machen; Sie sollten auch ein Bildschirmleseprogramm einrichten und damit herumspielen, um eine Vorstellung davon zu bekommen, wie es funktioniert. Weitere Details zur Nutzung finden Sie in unseren [Tutorials zu Bildschirmlesern](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das untenstehende Video bietet zudem ein kurzes Beispiel, wie das Erlebnis ist.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass „weltweit 285 Millionen Menschen mit Sehbehinderungen leben: 39 Millionen sind blind und 246 Millionen haben eine Sehschwäche.“ (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, auf die man nicht verzichten sollte, nur weil Ihre Website nicht richtig codiert ist — fast so groß wie die Bevölkerung der USA.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben verschiedene Grade von Hörverlust, die von leicht bis schwer reichen. Obwohl einige von ihnen AT nutzen (siehe [Hilfsmittel für Menschen mit Hör-, Sprach-, Stimm- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind diese nicht weit verbreitet.

Um Zugang zu gewähren, müssen Textalternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkripte für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund der hohen [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) bei DHH-Bevölkerungsgruppen [eine Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Nutzerbasis dar – „466 Millionen Menschen weltweit haben eine Hörbehinderung“, sagt das [Datenblatt zu Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) der Weltgesundheitsorganisation.

### Menschen mit Mobilitätseinschränkungen

Diese Menschen haben Bewegungsbehinderungen, die rein physische Probleme (wie Gliedmaßenverlust oder Lähmung) oder neurologische/genetische Störungen beinhalten können, welche Schwäche oder Kontrollverlust in den Gliedmaßen verursachen. Einige Menschen könnten Schwierigkeiten haben, die genauen Handbewegungen zu machen, die zur Nutzung einer Maus erforderlich sind, während andere schwerer betroffen sein könnten, etwa bis hin zur signifikanten Lähmung, die den Einsatz eines [Kopfzeigers](https://www.performancehealth.com/adjustable-headpointer) zur Interaktion mit Computern erfordert.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder Zustands, und sie könnte auch durch Hardwareeinschränkungen verursacht werden – einige Benutzer könnten keine Maus haben.

Die Art und Weise, wie dies die Webentwicklungsarbeit normalerweise beeinflusst, ist die Anforderung, dass Steuerungen über die Tastatur zugänglich sind – wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur zu testen, um zu sehen, wie es Ihnen dabei ergeht. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerungen eines Webformulars zu wechseln, beispielsweise? Weitere Einzelheiten zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie nach Möglichkeit semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf Statistiken haben viele Menschen Mobilitätsbeeinträchtigungen. Die US-amerikanischen Zentren für Krankheitskontrolle und Prävention [Disability and Functioning (Nichtinstitutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass in den USA "der Prozentsatz der Erwachsenen mit irgendeiner physischen Funktionsstörung: 16,1 % beträgt".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit geistigen Behinderungen, die über die am meisten eingeschränkten Fähigkeiten verfügen, bis zu uns allen, wenn wir altern und Schwierigkeiten haben, zu denken und sich zu erinnern. Die Bandbreite umfasst Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist jedoch, dass es innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen zwar viel Vielfalt gibt, aber Menschen mit diesen Beeinträchtigungen eine gemeinsame Reihe funktionaler Probleme erleben. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, das Erinnern, wie Aufgaben abgeschlossen werden, und Verwirrung durch inkonsistente Seitenlayouts.

Eine gute Grundlage der Zugänglichkeit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitstellung von Inhalten auf mehr als eine Art und Weise, z.B. durch Text-zu-Sprache oder Video.
- Leicht verständliche Inhalte, wie Texte, die nach Standards für einfache Sprache verfasst sind.
- Konzentration auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Seitenlayout und Navigation.
- Vertraute Elemente, z.B. unterstrichene Links in Blau, wenn nicht besucht, und in Lila, wenn besucht.
- Aufteilung von Prozessen in logische, wesentliche Schritte mit Fortschrittsanzeige.
- Website-Authentifizierung so einfach wie möglich zu gestalten, ohne die Sicherheit zu beeinträchtigen.
- Formulare einfach ausfüllbar machen, z.B. durch klare Fehlermeldungen und einfache Fehlerbehebung.

### Hinweise

- Das Design mit [kognitiver Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Designpraktiken. Diese werden jedem zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich [Leitlinien zur kognitiven Zugänglichkeit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Task Force für kognitive und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C entwickelt Leitlinien zur Webzugänglichkeit für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die Zentren für Krankheitskontrolle in den USA schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat, und [kognitive Beeinträchtigungen sind die häufigste bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige geistige Behinderungen historisch als "geistige Behinderung" bezeichnet. Viele empfinden diesen Begriff mittlerweile als abwertend, daher sollte seine Verwendung vermieden werden.
- In Großbritannien werden einige geistige Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein häufiges Missverständnis über Barrierefreiheit ist, dass Barrierefreiheit ein teures "zusätzliches Extra" ist, das in ein Projekt implementiert werden muss. Dieses Missverständnis kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website "nachzurüsten", die erhebliche Barrierefreiheitsprobleme hat.
- Sie haben erst spät in einem Projekt begonnen, Barrierefreiheit zu berücksichtigen und dabei zusammenhängende Probleme entdeckt.

Wenn Sie jedoch Barrierefreiheit von Anfang an bei einem Projekt berücksichtigen, sollten die Kosten für die Zugänglichmachung des Inhalts relativ gering sein.

Berücksichtigen Sie bei der Planung Ihres Projekts Barrierefreiheitstests in Ihrem Testregime, genauso wie das Testen für andere wichtige Zielgruppen (z.B. Ziel-Desktop- oder Mobile-Browser). Testen Sie frühzeitig und oft, idealerweise durch die Durchführung automatisierter Tests, um programmatisch erkennbare fehlende Funktionen (wie fehlenden Bild [Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechten Link-Text — siehe [Verwenden Sie sinnvolle Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) zu erkennen und führen Sie einige Tests mit Gruppen von Benutzern mit Behinderungen durch, um zu sehen, wie gut komplexere Website-Funktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumswähler-Widget von Personen mit Bildschirmlesegeräten nutzbar?
- Erkennen sehbehinderte Personen, wenn sich Inhalte dynamisch aktualisieren?
- Sind meine UI-Buttons sowohl für Tastatur- als auch für Benutzer von Touch-Interfaces zugänglich?

Sie können und sollten sich Notizen zu potenziellen Problembereichen in Ihren Inhalten machen, die zur Zugänglichmachung Arbeit erfordern, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie im nächsten Artikel zu sehen) sind einfach, aber wie sieht es mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken aus? Sie sollten Ihr Projektbudget betrachten und darüber nachdenken, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Die Transkription aller Ihrer Multimedia-Inhalte ist eine Möglichkeit, die zwar teuer, aber machbar ist.

Auch realistisch sein. "100 % Barrierefreiheit" ist ein unerreichbares Ideal – Sie werden immer auf irgendeine Art von Randfall stoßen, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte als schwer zu verwenden empfindet — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein beeindruckendes 3D-Kreisdiagramm mit WebGL zu verwenden, möchten Sie möglicherweise eine Datentabelle als zugängliche alternative Darstellung der Daten einbeziehen. Oder Sie möchten die Tabelle einfach einbeziehen und das 3D-Kreisdiagramm entfernen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu pflegen.

Auf der anderen Seite, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Ihnen Barrierefreiheit am Herzen liegt und Sie darüber nachgedacht haben, veröffentlichen Sie eine Barriereerklärung auf Ihrer Website, die beschreibt, wie Ihre Richtlinien zu Barrierefreiheit aussehen und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn jemand darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, seien Sie mitfühlend und ergreifen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Berücksichtigen Sie Barrierefreiheit von Anfang an bei einem Projekt und testen Sie frühzeitig und oft. Genau wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Bedenken Sie, dass viele Barrierefreiheits-Best-Practices jedem zugutekommen, nicht nur Benutzern mit Behinderungen. Zum Beispiel ist schlanker semantischer Markup nicht nur gut für Bildschirmlesegeräte, sondern es lädt auch schnell und ist performant. Dies kommt jedem zugute, insbesondere denen auf mobilen Geräten und/oder mit langsamen Verbindungen.
- Veröffentlichen Sie eine Barriereerklärung auf Ihrer Website und treten Sie in Dialog mit Personen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Sets von Richtlinien, die als Grundlage für Barrierefreiheitstests verfügbar sind, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen, in denen Vorsicht geboten ist, vertraut zu machen sowie den hochrangigen Strukturen der Richtlinien, die für Sie am relevantesten sind, zu verstehen.

- Zunächst hat das W3C ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für Barrierefreiheitskonformität enthält. Diese werden als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet, und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ausgangspunkt für eine leichte Einführung und das Erlernen ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es gibt keine Notwendigkeit, alle WCAG-Kriterien zu lernen — seien Sie sich der wichtigsten Problemfelder bewusst und verwenden Sie eine Vielzahl von Techniken und Tools, um Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe unten für mehr).
- Ihr Land kann auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihrer Bevölkerung dienen, zugänglich sind — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Abschnitt 508 des Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnologie Verordnung BIKV](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine Liste der [Gesetze und Richtlinien zur Webzugänglichkeit](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG also eine Sammlung von Richtlinien darstellt, wird Ihr Land wahrscheinlich Gesetze zur Webzugänglichkeit haben, oder zumindest zur Zugänglichkeit von Dienstleistungen, die der Öffentlichkeit zugänglich sind (dazu könnten Websites, Fernsehen, physische Räume usw. gehören). Es ist eine gute Idee, herauszufinden, welche Gesetze in Ihrem Land gelten. Wenn Sie keine Bemühungen unternehmen, um zu prüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn Leute Beschwerde einlegen.

Das klingt ernst, aber wirklich sollten Sie einfach die Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben skizziert. Bei Zweifeln holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden keine weiteren Ratschläge dieser Art geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrundeliegenden Betriebssystem), die Informationen für unterstützende Technologien (ATs) bereitstellen — ATs neigen meist dazu, Gebrauch von semantischen Informationen zu machen, sodass diese Informationen Dinge wie Stilinformationen oder JavaScript nicht einschließen. Diese Informationen sind in einem Informationsbaum strukturiert, der **Barrierefreiheitsbaum** genannt wird.

Verschiedene Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs verfügbar:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wo die natürliche semantische Information, die von den HTML-Elementen in Ihren Webanwendungen bereitgestellt wird, versagt, können Sie diese mit Funktionen aus der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen, die semantische Informationen zum Barrierefreiheitsbaum hinzufügen, um die Zugänglichkeit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [Grundlagen von WAI-ARIA](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick auf hohem Niveau über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und betrachtet haben, wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch das Verlangen haben, mehr über die Implementierungsdetails zu erfahren, die Websites zugänglich machen, und welche Werkzeuge dabei helfen können. Wir werden uns im nächsten Artikel die Barrierefreiheits-Tools ansehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Auto-Untertitel-Erweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
