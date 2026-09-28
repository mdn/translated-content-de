---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel führt in das Modul ein und gibt einen Überblick darüber, was Barrierefreiheit bedeutet. Sie erfahren, welche Personengruppen wir berücksichtigen müssen und warum, mit welchen Hilfsmitteln Menschen das Web nutzen und wie wir Barrierefreiheit in unsere Arbeitsabläufe bei der Webentwicklung integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Nutzen von Barrierefreiheit: besserer Zugang zu digitalen Diensten für Menschen mit besonderen Bedürfnissen, bessere Benutzerfreundlichkeit für alle, bessere Suchmaschinenoptimierung (SEO) und eine größere Zielgruppe.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen an Barrierefreiheit.</li>
          <li>Verständnis dafür, dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt und nicht erst am Ende ergänzt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und ihren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit bedeutet, Websites so zu gestalten, dass möglichst viele Menschen sie nutzen können. Traditionell denken wir dabei an Menschen mit Behinderungen. Barrierefreie Websites kommen aber auch anderen Gruppen zugute, etwa Menschen, die Mobilgeräte verwenden oder eine langsame Netzwerkverbindung haben.

Sie können Barrierefreiheit auch als den Grundsatz verstehen, alle Menschen gleich zu behandeln und ihnen unabhängig von ihren Fähigkeiten oder Lebensumständen die gleichen Möglichkeiten zu geben. So wie es falsch ist, jemanden wegen eines Rollstuhls von einem Gebäude auszuschließen – moderne öffentliche Gebäude haben in der Regel Rampen oder Aufzüge –, ist es auch nicht richtig, jemanden wegen einer Sehbeeinträchtigung von einer Website auszuschließen. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben deshalb dieselben Menschenrechte.

Barrierefreiheit ist das Richtige. In manchen Ländern ist die Bereitstellung barrierefreier Websites gesetzlich vorgeschrieben. Sie kann außerdem bedeutende Märkte erschließen, deren Menschen Ihre Dienste sonst nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Die Erstellung barrierefreier Websites kommt allen zugute:

- Semantisches HTML verbessert nicht nur die Barrierefreiheit, sondern auch die Suchmaschinenoptimierung (SEO), sodass Ihre Website leichter gefunden wird.
- Wer sich um Barrierefreiheit kümmert, zeigt Verantwortungsbewusstsein und verbessert damit das öffentliche Ansehen.
- Andere bewährte Verfahren zur Verbesserung der Barrierefreiheit machen Ihre Website auch für weitere Gruppen benutzerfreundlicher, etwa für Menschen mit Mobiltelefonen oder langsamen Netzwerkverbindungen. Tatsächlich können viele dieser Verbesserungen allen zugutekommen.
- Haben wir schon erwähnt, dass Barrierefreiheit mancherorts auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen – und ihre Behinderungen sind es ebenfalls. Entscheidend ist, über den eigenen Computer und die eigene Nutzung des Webs hinauszudenken und zu verstehen, wie andere Menschen es nutzen: _Sie sind nicht Ihre Nutzer_. Die wichtigsten Arten von Behinderungen werden im Folgenden erläutert, zusammen mit den speziellen Hilfsmitteln, mit denen Betroffene auf Webinhalte zugreifen. Diese werden als **assistive Technologien** oder **ATs** bezeichnet.

> [!NOTE]
> Laut dem Faktenblatt [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) der Weltgesundheitsorganisation haben „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung“, und „zwischen 110 und 190 Millionen Erwachsene haben erhebliche Schwierigkeiten bei alltäglichen Tätigkeiten“.

### Menschen mit Sehbeeinträchtigungen

Zu den Menschen mit Sehbeeinträchtigungen zählen blinde Menschen, Menschen mit eingeschränktem Sehvermögen und Menschen mit Farbsehschwächen. Viele verwenden Vergrößerungshilfen – entweder physische Lupen oder Zoomfunktionen in Software. Die meisten Browser und Betriebssysteme bieten heute Zoomfunktionen. Manche Menschen sind auf Screenreader angewiesen, also Software, die digitale Texte vorliest. Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://help.gnome.org/orca/introduction.html) (Linux – auf mehreren Distributionen standardmäßig installiert).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/accessibility/windows/narrator/complete-guide-to-narrator) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (unter ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist sinnvoll, sich mit Screenreadern vertraut zu machen. Richten Sie einen Screenreader ein und probieren Sie ihn aus, um zu verstehen, wie er funktioniert. Weitere Informationen zur Verwendung finden Sie in unseren [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das folgende Video vermittelt ebenfalls einen kurzen Eindruck davon, wie sich die Nutzung anfühlt.

{{EmbedYouTube("IK97XMibEws")}}

Die Weltgesundheitsorganisation schätzt, dass weltweit „285 Millionen Menschen sehbeeinträchtigt sind: 39 Millionen sind blind und 246 Millionen haben ein eingeschränktes Sehvermögen“ (siehe [Visual impairment and blindness](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Nutzergruppe, die Sie nicht allein deshalb ausschließen sollten, weil Ihre Website nicht richtig programmiert ist – sie ist fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbeeinträchtigungen

[Taube und schwerhörige Menschen](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss) haben unterschiedlich starke Hörverluste, von leicht bis hochgradig. Manche verwenden zwar assistive Technologien (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), diese sind jedoch nicht weit verbreitet.

Um Zugang zu ermöglichen, müssen textbasierte Alternativen bereitgestellt werden. Videos sollten manuell untertitelt und für Audioinhalte sollten Transkripte bereitgestellt werden. Da [mangelnder Zugang zu Sprache](https://stoneharborstaffing.com/blog/language-deprivation#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) unter tauben und schwerhörigen Menschen häufig vorkommt, sollte außerdem [eine Vereinfachung von Texten erwogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen bilden ebenfalls eine bedeutende Nutzergruppe: Laut dem Faktenblatt [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) der Weltgesundheitsorganisation haben „weltweit 466 Millionen Menschen einen beeinträchtigenden Hörverlust“.

### Menschen mit motorischen Beeinträchtigungen

Diese Menschen haben Einschränkungen ihrer Bewegungsfähigkeit. Die Ursachen können rein körperlich sein, etwa der Verlust einer Gliedmaße oder eine Lähmung, oder auf neurologischen beziehungsweise genetischen Erkrankungen beruhen, die zu Schwäche oder eingeschränkter Kontrolle über die Gliedmaßen führen. Manche Menschen können die für die Bedienung einer Maus erforderlichen präzisen Handbewegungen nur schwer ausführen. Andere sind möglicherweise stärker beeinträchtigt und so weitgehend gelähmt, dass sie zur Bedienung eines Computers beispielsweise einen [Kopfzeiger](https://support.performancehealth.com/support/solutions/articles/69000742400-adjustable-head-pointer) benötigen.

Eine solche Einschränkung kann auch altersbedingt sein, statt auf eine bestimmte Verletzung oder Erkrankung zurückzugehen. Auch Einschränkungen bei der Hardware können eine Rolle spielen – manche Menschen haben möglicherweise keine Maus.

Für die Webentwicklung bedeutet dies in der Regel, dass Bedienelemente per Tastatur zugänglich sein müssen. Auf die Bedienbarkeit per Tastatur gehen wir in späteren Artikeln dieses Moduls näher ein. Probieren Sie am besten schon jetzt aus, einige Websites ausschließlich mit der Tastatur zu nutzen. Können Sie beispielsweise mit der Tabulatortaste zwischen den verschiedenen Bedienelementen eines Webformulars wechseln? Weitere Einzelheiten finden Sie im Abschnitt [Nach Möglichkeit semantische UI-Bedienelemente verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

Motorische Beeinträchtigungen betreffen statistisch gesehen viele Menschen. Die US-amerikanischen Centers for Disease Control and Prevention geben unter [Disability and Functioning (Non-institutionalized Adults 18 Years and Over)](https://www.cdc.gov/nchs/fastats/disability.htm) für die USA an: „Anteil der Erwachsenen mit irgendeiner Einschränkung körperlicher Funktionen: 16,1 %“.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen umfassen ein breites Spektrum: von Menschen mit intellektuellen Beeinträchtigungen, deren Fähigkeiten stark eingeschränkt sind, bis hin zu altersbedingten Schwierigkeiten beim Denken und Erinnern, die uns alle betreffen können. Dazu gehören Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Ebenso zählen Menschen mit Lernstörungen wie [Legasthenie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd) dazu. Trotz der Vielfalt klinischer Definitionen kognitiver Beeinträchtigungen erleben betroffene Menschen häufig ähnliche praktische Schwierigkeiten. Dazu zählen Probleme, Inhalte zu verstehen, sich die Schritte zur Erledigung von Aufgaben zu merken, sowie Verwirrung durch uneinheitliche Seitenlayouts.

Eine gute Grundlage für die Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Inhalte auf mehr als eine Weise bereitzustellen, etwa als Text, der vorgelesen werden kann, oder als Video.
- Leicht verständliche Inhalte, beispielsweise Texte in einfacher Sprache.
- Die Aufmerksamkeit auf wichtige Inhalte zu lenken.
- Ablenkungen durch unnötige Inhalte oder Werbung zu minimieren.
- Ein einheitliches Seitenlayout und eine einheitliche Navigation.
- Vertraute Gestaltungsmuster, etwa unterstrichene Links, die vor dem Besuch blau und danach violett dargestellt werden.
- Abläufe in logische, notwendige Schritte mit Fortschrittsanzeigen zu unterteilen.
- Die Anmeldung auf der Website so einfach wie möglich zu gestalten, ohne die Sicherheit zu beeinträchtigen.
- Formulare leicht ausfüllbar zu machen, etwa durch klare Fehlermeldungen und einfache Möglichkeiten zur Fehlerkorrektur.

### Hinweise

- Die Gestaltung unter Berücksichtigung [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) fördert gute Gestaltungspraktiken, von denen alle profitieren.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erarbeitet Richtlinien für die Barrierefreiheit im Web für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM bietet eine [Seite zu kognitiven Beeinträchtigungen](https://webaim.org/articles/cognitive/) mit einschlägigen Informationen und Ressourcen.
- Die US-amerikanischen Centers for Disease Control and Prevention schätzen, dass 2018 jede vierte Person in den USA eine Behinderung hatte und dass [kognitive Beeinträchtigungen unter jungen Menschen am häufigsten waren](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden manche intellektuellen Beeinträchtigungen früher als „mental retardation“ bezeichnet. Viele Menschen empfinden diesen Begriff heute als herabwürdigend; er sollte daher vermieden werden.
- Im Vereinigten Königreich werden manche intellektuellen Beeinträchtigungen als „learning disabilities“ oder „learning difficulties“ bezeichnet.

## Barrierefreiheit in Ihr Projekt integrieren

Ein verbreiteter Irrtum ist, dass Barrierefreiheit eine teure „Zusatzleistung“ in einem Projekt sei. Das _kann_ tatsächlich zutreffen, wenn:

- Sie versuchen, eine bestehende Website mit erheblichen Barrierefreiheitsproblemen nachträglich barrierefrei zu machen.
- Sie Barrierefreiheit erst in einer späten Projektphase berücksichtigen und dann entsprechende Probleme entdecken.

Wenn Sie Barrierefreiheit dagegen von Beginn eines Projekts an berücksichtigen, sollten die Kosten, die meisten Inhalte zugänglich zu machen, recht gering sein.

Berücksichtigen Sie bei der Projektplanung Tests zur Barrierefreiheit genauso wie Tests für jede andere wichtige Zielgruppe, beispielsweise für bestimmte Desktop- oder Mobilbrowser. Testen Sie früh und regelmäßig. Idealerweise führen Sie automatisierte Tests durch, um programmatisch erkennbare Mängel aufzuspüren, etwa fehlende [Alternativtexte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder oder unklare Linktexte – siehe [Aussagekräftige Textbeschriftungen verwenden](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels). Testen Sie komplexere Funktionen außerdem mit Menschen mit Behinderungen, um herauszufinden, wie gut diese sie nutzen können. Fragen Sie beispielsweise:

- Können Menschen, die Screenreader verwenden, mein Widget zur Datumsauswahl bedienen?
- Erfahren Menschen mit Sehbeeinträchtigungen, wenn Inhalte dynamisch aktualisiert werden?
- Können sowohl Menschen, die eine Tastatur verwenden, als auch Menschen mit Touchscreen meine UI-Schaltflächen bedienen?

Sie können und sollten potenzielle Problembereiche Ihrer Inhalte notieren, die für die Barrierefreiheit überarbeitet werden müssen. Stellen Sie sicher, dass diese gründlich getestet werden, und überlegen Sie sich Lösungen oder Alternativen. Textinhalte sind, wie Sie im nächsten Artikel sehen werden, vergleichsweise einfach. Aber was ist mit Ihren Multimedia-Inhalten und aufwendigen 3D-Grafiken? Prüfen Sie Ihr Projektbudget und überlegen Sie, welche Möglichkeiten Ihnen zur Verfügung stehen, um solche Inhalte zugänglich zu machen. Eine Möglichkeit besteht darin, alle Multimedia-Inhalte transkribieren zu lassen. Das ist zwar teuer, aber machbar.

Bleiben Sie außerdem realistisch. „100 % Barrierefreiheit“ ist ein unerreichbares Ideal: Es wird immer Sonderfälle geben, in denen bestimmte Menschen bestimmte Inhalte nur schwer nutzen können. Dennoch sollten Sie so viel wie möglich tun. Wenn Sie ein aufwendiges, mit WebGL erstelltes 3D-Kreisdiagramm einbinden möchten, könnten Sie die Daten zusätzlich in einer zugänglichen Tabelle darstellen. Oder Sie verzichten auf das 3D-Kreisdiagramm und verwenden nur die Tabelle: Sie ist für alle zugänglich, schneller zu programmieren, benötigt weniger CPU-Leistung und ist leichter zu pflegen.

Wenn Sie dagegen an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es angesichts dieses rein visuellen Mediums unrealistisch zu erwarten, dass jedes Kunstwerk für Menschen mit Sehbeeinträchtigungen vollständig zugänglich ist.

Um zu zeigen, dass Ihnen Barrierefreiheit wichtig ist und Sie sich damit auseinandergesetzt haben, veröffentlichen Sie auf Ihrer Website eine Erklärung zur Barrierefreiheit. Darin sollten Sie Ihre Grundsätze und die Maßnahmen beschreiben, mit denen Sie die Website zugänglich machen. Wenn Sie jemand auf ein Barrierefreiheitsproblem Ihrer Website hinweist, suchen Sie das Gespräch, zeigen Sie Verständnis und ergreifen Sie angemessene Schritte, um das Problem zu beheben.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Beginn eines Projekts an und testen Sie früh und regelmäßig. Wie bei jedem anderen Fehler wird auch die Behebung eines Barrierefreiheitsproblems teurer, je später es entdeckt wird.
- Denken Sie daran, dass viele bewährte Verfahren für Barrierefreiheit allen zugutekommen, nicht nur Menschen mit Behinderungen. Schlankes, semantisches Markup ist beispielsweise nicht nur für Screenreader gut, sondern lädt auch schnell und ist leistungsfähig. Davon profitieren alle, besonders Menschen mit Mobilgeräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie auf Ihrer Website eine Erklärung zur Barrierefreiheit und treten Sie mit Menschen in Kontakt, die auf Probleme stoßen.

## Richtlinien zur Barrierefreiheit und gesetzliche Vorgaben

Für Tests zur Barrierefreiheit gibt es zahlreiche Checklisten und Richtlinien, was auf den ersten Blick überwältigend wirken kann. Wir empfehlen Ihnen, sich mit den grundlegenden Bereichen vertraut zu machen, auf die Sie achten müssen, und die übergeordnete Struktur der für Sie wichtigsten Richtlinien zu verstehen.

- Das W3C hat ein umfangreiches und sehr detailliertes Dokument veröffentlicht, das präzise, technologieunabhängige Kriterien für die Konformität mit Barrierefreiheitsanforderungen enthält: die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG). Es handelt sich keineswegs um eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt. Sie beschreiben, wie Umsetzungen wahrnehmbar, bedienbar, verständlich und robust gestaltet werden können. Einen leicht zugänglichen Einstieg bietet [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Sie müssen nicht alle WCAG-Kriterien auswendig lernen. Machen Sie sich mit den wichtigsten Problembereichen vertraut und nutzen Sie verschiedene Methoden und Werkzeuge, um Abweichungen von den WCAG-Kriterien zu erkennen (mehr dazu weiter unten).
- Möglicherweise gibt es in Ihrem Land auch konkrete Gesetze, die Barrierefreiheit für Websites vorschreiben, die sich an die dortige Bevölkerung richten. Beispiele sind [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, die [Barrierefreie-Informationstechnik-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien und der [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services) in Australien. Das W3C führt eine nach Ländern geordnete Liste mit [Gesetzen und Regelungen zur Barrierefreiheit im Web](https://www.w3.org/WAI/policies/).

Die WCAG sind also Richtlinien. In Ihrem Land gibt es wahrscheinlich Gesetze zur Barrierefreiheit im Web oder zumindest zur Barrierefreiheit öffentlich zugänglicher Angebote. Dazu können Websites, Fernsehen, Gebäude und andere Bereiche gehören. Informieren Sie sich über die für Sie geltenden Gesetze. Wenn Sie nicht prüfen, ob Ihre Inhalte zugänglich sind, können Beschwerden unter Umständen rechtliche Folgen haben.

Das klingt ernst, aber letztlich müssen Sie Barrierefreiheit – wie oben beschrieben – zu einer zentralen Priorität Ihrer Webentwicklung machen. Holen Sie im Zweifelsfall Rat von einer qualifizierten Rechtsanwältin oder einem qualifizierten Rechtsanwalt ein. Weitergehende rechtliche Hinweise geben wir nicht, da wir keine Rechtsberatung anbieten.

## Barrierefreiheits-APIs

Webbrowser verwenden spezielle **Barrierefreiheits-APIs**, die vom zugrunde liegenden Betriebssystem bereitgestellt werden. Sie machen Informationen verfügbar, die für assistive Technologien (ATs) nützlich sind. ATs nutzen überwiegend semantische Informationen; dazu gehören daher beispielsweise keine Informationen zur Gestaltung oder JavaScript. Die Informationen sind in einer Baumstruktur organisiert, dem **Barrierefreiheitsbaum**.

Je nach Betriebssystem stehen unterschiedliche Barrierefreiheits-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wenn die nativen semantischen Informationen der HTML-Elemente in Ihren Webanwendungen nicht ausreichen, können Sie sie durch Funktionen der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen. Diese fügen dem Barrierefreiheitsbaum semantische Informationen hinzu und verbessern so die Zugänglichkeit. In unserem Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) erfahren Sie mehr über WAI-ARIA.

## Zusammenfassung

Dieser Artikel hat Ihnen einen Überblick über Barrierefreiheit gegeben und gezeigt, warum sie wichtig ist und wie Sie sie in Ihre Arbeitsabläufe integrieren können. Nun möchten Sie vielleicht erfahren, mit welchen konkreten Maßnahmen Sie Websites zugänglich machen können und welche Werkzeuge Ihnen dabei helfen. Im nächsten Artikel sehen wir uns Werkzeuge zur Barrierefreiheit an.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Erweiterung für automatische Untertitel veröffentlicht](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
