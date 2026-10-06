---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel führt in das Modul ein und erläutert, was Barrierefreiheit bedeutet. Sie erfahren, welche Personengruppen wir berücksichtigen sollten und warum, welche Hilfsmittel Menschen für die Nutzung des Webs verwenden und wie sich Barrierefreiheit in den Arbeitsablauf der Webentwicklung integrieren lässt.

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
          <li>Der Zweck von Barrierefreiheit: Menschen mit zusätzlichen Bedürfnissen den Zugang zu digitalen Diensten erleichtern, die Benutzerfreundlichkeit für alle verbessern, die Suchmaschinenoptimierung (SEO) fördern und eine größere Zielgruppe erreichen.</li>
          <li>Die gesetzlichen Anforderungen an Barrierefreiheit kennen.</li>
          <li>Verstehen, dass Barrierefreiheit von Beginn eines Projekts an berücksichtigt und nicht erst am Ende ergänzt werden sollte.</li>
          <li>Mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG) vertraut sein.</li>
          <li>Accessibility-APIs und ihren Zweck kennen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit bedeutet, Websites so zu gestalten, dass möglichst viele Menschen sie nutzen können. Traditionell denken wir dabei an Menschen mit Behinderungen. Barrierefreie Websites kommen aber auch anderen Gruppen zugute, etwa Menschen, die mobile Geräte verwenden oder eine langsame Netzwerkverbindung haben.

Sie können Barrierefreiheit auch als einen Weg verstehen, alle Menschen gleich zu behandeln und ihnen unabhängig von ihren Fähigkeiten oder Lebensumständen die gleichen Möglichkeiten zu bieten. So wie es falsch ist, eine Person im Rollstuhl von einem Gebäude auszuschließen – moderne öffentliche Gebäude verfügen in der Regel über Rollstuhlrampen oder Aufzüge –, ist es auch falsch, Menschen wegen einer Sehbeeinträchtigung von einer Website auszuschließen. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In manchen Ländern ist die Bereitstellung barrierefreier Websites gesetzlich vorgeschrieben. Dadurch können sich auch bedeutende Märkte erschließen, deren Menschen Ihre Dienste oder Produkte andernfalls nicht nutzen könnten.

Barrierefreie Websites nützen allen:

- Semantisches HTML verbessert die Barrierefreiheit und zugleich die Suchmaschinenoptimierung (SEO), sodass Ihre Website leichter zu finden ist.
- Wenn Sie Barrierefreiheit ernst nehmen, zeigen Sie ethisches Verantwortungsbewusstsein und verbessern damit Ihr öffentliches Ansehen.
- Andere bewährte Verfahren, die die Barrierefreiheit verbessern, machen Ihre Website auch für weitere Gruppen benutzerfreundlicher, etwa für Menschen mit Mobiltelefonen oder langsamen Netzwerkverbindungen. Tatsächlich können alle von vielen solchen Verbesserungen profitieren.
- Haben wir schon erwähnt, dass Barrierefreiheit mancherorts auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind ebenso vielfältig wie Menschen ohne Behinderungen – und ihre Behinderungen sind es auch. Entscheidend ist, über den eigenen Computer und die eigene Nutzung des Webs hinauszudenken und zu lernen, wie andere Menschen es nutzen: _Sie sind nicht Ihre Nutzer_. Die wichtigsten Arten von Behinderungen werden im Folgenden erläutert, ebenso wie besondere Hilfsmittel, mit denen Betroffene auf Webinhalte zugreifen. Diese werden als **assistive Technologien** oder **ATs** bezeichnet.

> [!NOTE]
> Laut dem Faktenblatt [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) der Weltgesundheitsorganisation haben „über eine Milliarde Menschen, etwa 15 % der Weltbevölkerung, irgendeine Form von Behinderung“. Außerdem haben demnach „zwischen 110 und 190 Millionen Erwachsene erhebliche Schwierigkeiten bei alltäglichen Aktivitäten“.

### Menschen mit Sehbeeinträchtigungen

Zu den Menschen mit Sehbeeinträchtigungen zählen blinde Menschen, Menschen mit eingeschränktem Sehvermögen und Menschen mit Farbenblindheit. Viele nutzen Vergrößerungshilfen, entweder als physische Lupen oder als Zoomfunktionen in Software. Die meisten Browser und Betriebssysteme bieten inzwischen Zoomfunktionen. Manche Menschen sind auf Screenreader angewiesen – Software, die digitale Texte vorliest. Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://vispero.com/jaws-screen-reader-software/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://help.gnome.org/orca/introduction.html) (Linux – auf mehreren Distributionen standardmäßig installiert).
- In das Betriebssystem integrierte Software wie [VoiceOver](https://www.apple.com/accessibility/features/?vision) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/accessibility/windows/narrator/complete-guide-to-narrator) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (unter ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist sinnvoll, sich mit Screenreadern vertraut zu machen: Richten Sie einen ein und probieren Sie ihn aus, um ein Gefühl dafür zu bekommen, wie er funktioniert. Weitere Einzelheiten zur Nutzung finden Sie in unseren [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das folgende Video vermittelt ebenfalls einen kurzen Eindruck davon.

{{EmbedYouTube("IK97XMibEws")}}

Die Weltgesundheitsorganisation schätzt, dass weltweit 285 Millionen Menschen eine Sehbeeinträchtigung haben: 39 Millionen sind blind und 246 Millionen haben ein eingeschränktes Sehvermögen (siehe [Visual impairment and blindness](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Gruppe von Nutzern, die Sie allein deshalb ausschließen würden, weil Ihre Website nicht richtig programmiert ist – sie umfasst fast so viele Menschen wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbeeinträchtigungen

[Taube und schwerhörige Menschen](https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss) sind in unterschiedlichem Maße von Hörverlust betroffen, von leicht bis hochgradig. Manche verwenden assistive Technologien (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), deren Nutzung ist jedoch nicht weit verbreitet.

Um den Zugang zu ermöglichen, müssen textbasierte Alternativen bereitgestellt werden. Videos sollten manuell untertitelt werden, und für Audioinhalte sollten Transkripte verfügbar sein. Da [eingeschränkter Zugang zu Sprache](https://stoneharborstaffing.com/blog/language-deprivation#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) unter tauben und schwerhörigen Menschen häufig vorkommt, sollte außerdem [eine Vereinfachung von Texten erwogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Auch taube und schwerhörige Menschen bilden eine bedeutende Nutzergruppe: Laut dem Faktenblatt [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss) der Weltgesundheitsorganisation haben „weltweit 466 Millionen Menschen einen Hörverlust, der sie im Alltag einschränkt“.

### Menschen mit Mobilitätseinschränkungen

Bei diesen Menschen ist die Bewegungsfähigkeit eingeschränkt. Ursache können rein körperliche Beeinträchtigungen sein, etwa der Verlust einer Gliedmaße oder eine Lähmung, aber auch neurologische oder genetische Erkrankungen, die zu Schwäche oder einem Kontrollverlust in den Gliedmaßen führen. Manche Menschen haben Schwierigkeiten mit den präzisen Handbewegungen, die für die Bedienung einer Maus nötig sind. Andere sind möglicherweise stärker betroffen und so weitgehend gelähmt, dass sie einen [Kopfstab](https://support.performancehealth.com/support/solutions/articles/69000742400-adjustable-head-pointer) benötigen, um mit Computern zu interagieren.

Solche Einschränkungen können auch durch das Alter entstehen, statt durch eine bestimmte Verletzung oder Erkrankung. Ebenso können Einschränkungen durch die verfügbare Hardware entstehen – manche Menschen haben möglicherweise keine Maus.

Für die Webentwicklung ergibt sich daraus vor allem die Anforderung, Bedienelemente über die Tastatur zugänglich zu machen. Auf die Tastaturbedienbarkeit gehen wir in späteren Artikeln dieses Moduls ein. Probieren Sie schon jetzt einige Websites ausschließlich mit der Tastatur aus, um zu sehen, wie gut Sie zurechtkommen. Können Sie beispielsweise mit der Tabulatortaste zwischen den verschiedenen Bedienelementen eines Webformulars wechseln? Weitere Einzelheiten zur Tastaturbedienung finden Sie im Abschnitt [Verwenden Sie nach Möglichkeit semantische UI-Bedienelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

Statistisch gesehen sind viele Menschen von Mobilitätseinschränkungen betroffen. Die US-amerikanische Gesundheitsbehörde Centers for Disease Control and Prevention gibt unter [Disability and Functioning (Non-institutionalized Adults 18 Years and Over)](https://www.cdc.gov/nchs/fastats/disability.htm) für die USA an: „Anteil der Erwachsenen mit irgendeiner Einschränkung der körperlichen Funktionsfähigkeit: 16,1 %“.

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigungen umfassen ein breites Spektrum: von Menschen mit intellektuellen Beeinträchtigungen, deren Fähigkeiten besonders stark eingeschränkt sind, bis hin zu Schwierigkeiten beim Denken und Erinnern, die uns alle im Alter betreffen können. Dazu gehören Menschen mit psychischen Erkrankungen wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Auch Menschen mit Lernstörungen wie [Legasthenie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd) gehören dazu. Obwohl die klinischen Definitionen kognitiver Beeinträchtigungen sehr unterschiedlich sind, erleben Betroffene häufig ähnliche praktische Schwierigkeiten. Dazu zählen Probleme beim Verstehen von Inhalten, beim Erinnern an die Schritte zur Erledigung von Aufgaben sowie Verwirrung durch uneinheitliche Seitenlayouts.

Eine gute Grundlage für die Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Inhalte auf mehr als eine Weise anbieten, beispielsweise als Text-to-Speech-Ausgabe oder Video.
- Leicht verständliche Inhalte bereitstellen, etwa Texte in klarer, einfacher Sprache.
- Die Aufmerksamkeit auf wichtige Inhalte lenken.
- Ablenkungen wie unnötige Inhalte oder Werbung minimieren.
- Ein einheitliches Seitenlayout und eine einheitliche Navigation verwenden.
- Vertraute Darstellungen nutzen, etwa unterstrichene Links, die vor dem Besuch blau und danach violett sind.
- Abläufe in logische, notwendige Schritte unterteilen und den Fortschritt anzeigen.
- Die Anmeldung auf der Website so einfach wie möglich gestalten, ohne die Sicherheit zu beeinträchtigen.
- Formulare leicht ausfüllbar machen, beispielsweise durch klare Fehlermeldungen und einfache Möglichkeiten zur Fehlerkorrektur.

### Hinweise

- Die Gestaltung unter Berücksichtigung [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Designpraktiken, von denen alle profitieren.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) des W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) des W3C erarbeitet Richtlinien zur Barrierefreiheit im Web für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM bietet auf seiner [Seite zu kognitiven Beeinträchtigungen](https://webaim.org/articles/cognitive/) einschlägige Informationen und Ressourcen.
- Nach Schätzungen der US-amerikanischen Centers for Disease Control hatte 2018 ein Viertel der US-Bevölkerung eine Behinderung. Unter jungen Menschen sind [kognitive Beeinträchtigungen die häufigste Art von Behinderung](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden manche intellektuellen Beeinträchtigungen früher als „mental retardation“ bezeichnet. Viele Menschen betrachten diesen Ausdruck heute als abwertend; er sollte daher vermieden werden.
- Im Vereinigten Königreich werden manche intellektuellen Beeinträchtigungen als „learning disabilities“ oder „learning difficulties“ bezeichnet.

## Barrierefreiheit in Ihr Projekt integrieren

Ein verbreiteter Mythos besagt, Barrierefreiheit sei ein teurer „Zusatz“ für ein Projekt. Das _kann_ tatsächlich zutreffen, wenn:

- Sie versuchen, eine bestehende Website mit erheblichen Barrierefreiheitsproblemen nachträglich barrierefrei zu gestalten.
- Sie sich erst spät im Projekt mit Barrierefreiheit befassen und dabei entsprechende Probleme entdecken.

Wenn Sie Barrierefreiheit dagegen von Projektbeginn an berücksichtigen, sollten die Kosten für die barrierefreie Gestaltung der meisten Inhalte relativ gering sein.

Planen Sie beim Projektstart Tests zur Barrierefreiheit ein, genauso wie Tests für andere wichtige Zielgruppen, beispielsweise für Nutzer bestimmter Desktop- oder Mobilbrowser. Testen Sie frühzeitig und regelmäßig. Idealerweise führen Sie automatisierte Tests durch, um programmatisch erkennbare Mängel aufzudecken, etwa fehlenden [Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) für Bilder oder ungeeignete Linktexte (siehe [Verwenden Sie aussagekräftige Textbeschriftungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)). Testen Sie außerdem mit Menschen mit Behinderungen, wie gut komplexere Funktionen Ihrer Website für sie funktionieren. Fragen Sie beispielsweise:

- Können Menschen, die Screenreader verwenden, mein Widget zur Datumsauswahl bedienen?
- Bemerken Menschen mit Sehbeeinträchtigungen, wenn Inhalte dynamisch aktualisiert werden?
- Sind meine UI-Schaltflächen sowohl per Tastatur als auch über eine Touch-Oberfläche zugänglich?

Sie können und sollten potenziell problematische Bereiche Ihrer Inhalte festhalten, die für die Barrierefreiheit noch überarbeitet werden müssen. Stellen Sie sicher, dass diese gründlich getestet werden, und überlegen Sie sich Lösungen oder Alternativen. Textinhalte sind, wie Sie im nächsten Artikel sehen werden, vergleichsweise einfach. Aber was ist mit Ihren Multimedia-Inhalten und aufwendigen 3D-Grafiken? Prüfen Sie Ihr Projektbudget und überlegen Sie, welche Möglichkeiten Ihnen zur Verfügung stehen, um solche Inhalte zugänglich zu machen. Alle Multimedia-Inhalte transkribieren zu lassen, ist eine mögliche, wenn auch kostspielige Lösung.

Bleiben Sie außerdem realistisch. „100 % Barrierefreiheit“ ist ein unerreichbares Ideal: Es wird immer Sonderfälle geben, in denen bestimmte Inhalte für einzelne Menschen schwer zu nutzen sind. Dennoch sollten Sie so viel wie möglich tun. Wenn Sie beispielsweise ein aufwendiges 3D-Kreisdiagramm mit WebGL einbinden möchten, könnten Sie zusätzlich eine Datentabelle als barrierefreie Darstellung derselben Daten anbieten. Sie könnten auch nur die Tabelle verwenden und auf das 3D-Kreisdiagramm verzichten. Die Tabelle ist für alle zugänglich, schneller zu programmieren, weniger rechenintensiv und leichter zu warten.

Wenn Sie dagegen an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unangemessen zu erwarten, dass jedes Kunstwerk für Menschen mit Sehbeeinträchtigungen vollständig zugänglich ist – schließlich handelt es sich um ein rein visuelles Medium.

Veröffentlichen Sie eine Erklärung zur Barrierefreiheit auf Ihrer Website, um zu zeigen, dass Ihnen das Thema wichtig ist und Sie sich damit auseinandergesetzt haben. Beschreiben Sie darin Ihre Grundsätze zur Barrierefreiheit und die Schritte, die Sie unternommen haben, um Ihre Website zugänglich zu machen. Wenn jemand Sie auf ein Barrierefreiheitsproblem hinweist, suchen Sie das Gespräch, reagieren Sie verständnisvoll und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Projektbeginn an und testen Sie frühzeitig und regelmäßig. Wie bei jedem anderen Fehler wird auch die Behebung eines Barrierefreiheitsproblems teurer, je später es entdeckt wird.
- Denken Sie daran, dass viele bewährte Verfahren zur Barrierefreiheit allen zugutekommen, nicht nur Menschen mit Behinderungen. Schlankes semantisches Markup ist beispielsweise nicht nur für Screenreader hilfreich, sondern lädt auch schnell und ist performant. Davon profitieren alle, besonders Menschen mit mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Erklärung zur Barrierefreiheit auf Ihrer Website und treten Sie mit Menschen in Kontakt, die auf Probleme stoßen.

## Richtlinien zur Barrierefreiheit und gesetzliche Vorgaben

Für Tests zur Barrierefreiheit stehen zahlreiche Checklisten und Richtlinien zur Verfügung. Das kann auf den ersten Blick überwältigend wirken. Wir empfehlen Ihnen, sich zunächst mit den grundlegenden Bereichen vertraut zu machen, auf die Sie achten müssen, und den übergeordneten Aufbau der für Sie wichtigsten Richtlinien zu verstehen.

- Das W3C hat ein umfangreiches, sehr detailliertes Dokument mit präzisen, technologieunabhängigen Kriterien für die Konformität mit Barrierefreiheitsanforderungen veröffentlicht: die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG). Sie sind alles andere als eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die beschreiben, wie eine Umsetzung wahrnehmbar, bedienbar, verständlich und robust gestaltet werden kann. Einen guten, leicht zugänglichen Einstieg bietet [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Sie müssen nicht alle WCAG-Kriterien auswendig lernen. Machen Sie sich mit den wichtigsten Problembereichen vertraut und verwenden Sie verschiedene Techniken und Werkzeuge, um Bereiche zu erkennen, die den WCAG-Kriterien nicht entsprechen (mehr dazu weiter unten).
- Möglicherweise gelten in Ihrem Land eigene gesetzliche Vorgaben zur Barrierefreiheit von Websites, die sich an die Bevölkerung richten – beispielsweise [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, die [Barrierefreie-Informationstechnik-Verordnung](https://www.aktion-mensch.de/inklusion/umsetzen/digitale-barrierefreiheit-websites) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien oder der [Disability Discrimination Act](https://humanrights.gov.au/resource-hub/by-resource-type/guidelines-and-standards/guides-and-standards-disability-rights/guidelines-equal-access-digital-goods-and-services) in Australien. Das W3C führt eine nach Ländern geordnete Liste mit [Gesetzen und Regelungen zur Barrierefreiheit im Web](https://www.w3.org/WAI/policies/).

Die WCAG sind zwar Richtlinien, doch in Ihrem Land gibt es wahrscheinlich Gesetze zur Barrierefreiheit im Web oder zumindest zur Barrierefreiheit öffentlich zugänglicher Angebote. Dazu können Websites, Fernsehen, öffentliche Räume und anderes gehören. Informieren Sie sich über die für Sie geltenden Gesetze. Wenn Sie sich nicht bemühen, die Barrierefreiheit Ihrer Inhalte zu prüfen, können Sie bei Beschwerden möglicherweise rechtlich haftbar gemacht werden.

Das klingt ernst, aber im Grunde sollten Sie Barrierefreiheit, wie oben beschrieben, zu einer zentralen Priorität Ihrer Webentwicklung machen. Holen Sie im Zweifelsfall Rat bei einer qualifizierten Rechtsanwältin oder einem qualifizierten Rechtsanwalt ein. Weitergehende rechtliche Hinweise geben wir nicht, denn wir sind keine Rechtsfachleute.

## Accessibility-APIs

Webbrowser verwenden spezielle **Accessibility-APIs**, die vom zugrunde liegenden Betriebssystem bereitgestellt werden. Sie machen Informationen zugänglich, die für assistive Technologien (ATs) nützlich sind. ATs nutzen vor allem semantische Informationen; Angaben zur Gestaltung oder JavaScript gehören daher nicht dazu. Die Informationen sind in einer Baumstruktur organisiert, dem **Accessibility Tree**.

Für verschiedene Betriebssysteme stehen unterschiedliche Accessibility-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility framework
- iOS: UIAccessibility

Wenn die nativen semantischen Informationen der HTML-Elemente in Ihren Webanwendungen nicht ausreichen, können Sie sie durch Funktionen der [WAI-ARIA-Spezifikation](https://w3c.github.io/aria/) ergänzen. Diese fügen dem Accessibility Tree semantische Informationen hinzu und verbessern so die Barrierefreiheit. Mehr über WAI-ARIA erfahren Sie in unserem Artikel [WAI-ARIA-Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics).

## Zusammenfassung

Dieser Artikel sollte Ihnen einen hilfreichen Überblick über Barrierefreiheit gegeben, ihre Bedeutung verdeutlicht und gezeigt haben, wie Sie sie in Ihren Arbeitsablauf integrieren können. Nun möchten Sie vielleicht mehr über die Umsetzung barrierefreier Websites und hilfreiche Werkzeuge erfahren. Im nächsten Artikel beschäftigen wir uns mit Werkzeugen für die Barrierefreiheit.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)
  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Erweiterung für automatische Untertitel veröffentlicht](https://blog.google/products-and-platforms/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
