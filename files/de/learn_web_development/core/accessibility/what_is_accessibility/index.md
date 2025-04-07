---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 9da2567689c0a4397b0d70efbbb878dec3115754
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem genauen Blick darauf, was Barrierefreiheit ist — dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Internet zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungs-Workflow integrieren können.

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
          <li>Der Zweck von Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, bessere SEO und ein größeres Zielpublikum.</li>
          <li>Bewusstsein für die rechtlichen Anforderungen der Barrierefreiheit.</li>
          <li>Dass Barrierefreiheit von Anfang an bei einem Projekt berücksichtigt werden sollte und nicht erst am Ende hinzugefügt werden sollte.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Traditionell denken wir dabei an Menschen mit Behinderungen, aber die Praxis, Websites zugänglich zu machen, kommt auch anderen Gruppen zugute, wie z. B. denen, die mobile Geräte verwenden oder eine langsame Netzwerkverbindung haben.

Sie könnten Barrierefreiheit auch als Gleichbehandlung aller betrachten und ihnen die gleichen Chancen bieten, unabhängig von ihrer Fähigkeit oder ihren Umständen. Genauso wie es falsch ist, jemanden wegen eines Rollstuhls von einem physischen Gebäude auszuschließen (moderne öffentliche Gebäude verfügen in der Regel über Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden wegen einer Sehbehinderung von einer Website auszuschließen. Wir sind alle verschieden, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern gehört die Bereitstellung barrierefreier Seiten zum Gesetz, was einige bedeutende Märkte öffnen kann, die ansonsten Ihre Dienste nicht nutzen oder Ihre Produkte nicht kaufen könnten.

Der Aufbau barrierefreier Websites bringt für alle Vorteile:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO, was Ihre Website besser auffindbar macht.
- Das Bemühen um Barrierefreiheit zeigt gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere gute Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, z.B. für Mobiltelefonnutzer oder Menschen mit niedriger Netzwerkgeschwindigkeit. Tatsächlich können viele solcher Verbesserungen von jedem genutzt werden.
- Haben wir erwähnt, dass es auch in einigen Ländern gesetzlich vorgeschrieben ist?

## Welche Art von Behinderungen betrachten wir?

Menschen mit Behinderungen sind genauso vielfältig wie Menschen ohne Behinderungen, und so sind auch ihre Behinderungen. Die Hauptlektion hier ist, über den eigenen Computer hinaus zu denken und zu lernen, wie andere das Internet nutzen — _Sie sind nicht Ihre Nutzer_. Die wichtigsten Arten von Behinderungen, die berücksichtigt werden sollten, werden unten erklärt, zusammen mit den speziellen Werkzeugen, die sie verwenden, um auf Webinhalte zuzugreifen (bekannt als **assistive Technologien**, oder **ATs**).

> [!NOTE]
> Das Datenblatt der Weltgesundheitsorganisation [Disability and health](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) gibt an, dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, irgendeine Form von Behinderung haben" und "zwischen 110 Millionen und 190 Millionen Erwachsene haben erhebliche Funktionsbeeinträchtigungen."

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Menschen mit Blindheit, geringer Sehstärke und Farbenblindheit. Viele Menschen mit Sehbehinderungen nutzen Bildschirmvergrößerer, die entweder physische Lupen oder Software-Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoom-Funktionen. Einige Benutzer sind auf Screenreader angewiesen, das ist Software, die digitalen Text vorliest. Einige Beispiele für Screenreader sind:

- Kostenpflichtige kommerzielle Produkte wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- Software, die in Betriebssysteme integriert ist, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Screenreadern vertraut zu machen; Sie sollten auch einen Screenreader einrichten und damit herumspielen, um ein Gefühl dafür zu bekommen, wie er funktioniert. Siehe unsere [Screenreader-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers) für weitere Details zur Verwendung. Das untenstehende Video bietet außerdem ein kurzes Beispiel dafür, wie die Erfahrung aussieht.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit geschätzte 285 Millionen Menschen eine Sehbehinderung haben: 39 Millionen sind blind und 246 Millionen haben eine geringe Sehstärke." (siehe [Visual impairment and blindness](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, die Sie nicht verpassen sollten, weil Ihre Website nicht richtig codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Taube und schwerhörige (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben verschiedene Grade von Hörverlust, die von leicht bis schwer reichen. Obwohl einige ATs verwenden (siehe [Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um Zugang zu bieten, müssen textliche Alternativen bereitgestellt werden. Videos sollten manuell untertitelt und Transkriptionen für Audiomaterial bereitgestellt werden. Außerdem sollte aufgrund hoher Raten von [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in DHH-Populationen [Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Taube und schwerhörige Menschen stellen ebenfalls eine bedeutende Benutzerbasis dar — "466 Millionen Menschen weltweit haben eine beeinträchtigende Hörbehinderung", sagt das Datenblatt der Weltgesundheitsorganisation [Deafness and hearing loss](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen in Bezug auf Bewegung, was rein physische Probleme (wie Verlust einer Gliedmaße oder Lähmung) oder neurologische/genetische Störungen beinhalten könnte, die zu Schwäche oder Verlust der Kontrolle über Gliedmaßen führen. Manche Menschen haben möglicherweise Schwierigkeiten, die genauen Handbewegungen auszuführen, die zur Verwendung einer Maus erforderlich sind, während andere möglicherweise stärker betroffen sind und möglicherweise so stark gelähmt sind, dass sie einen [Head Pointer](https://www.performancehealth.com/adjustable-headpointer) verwenden müssen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch durch Alter, anstatt durch bestimmte Traumata oder Krankheiten verursacht werden, und kann auch durch Hardwarebeschränkungen entstehen — einige Benutzer haben möglicherweise keine Maus.

Wie sich dies normalerweise auf die Webentwicklung auswirkt, ist die Anforderung, dass Steuerelemente über die Tastatur zugänglich sind — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie zurechtkommen. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerelementen eines Webformulars zu wechseln, zum Beispiel? Sie finden mehr Details über Tastatursteuerungen in unserem Abschnitt [Verwenden Sie, wo möglich, semantische UI-Steuerelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf Statistiken haben eine bedeutende Anzahl von Menschen Mobilitätsbeeinträchtigungen. Die US Centers for Disease Control and Prevention [Disability and Functioning (Nicht-institutionalisierte Erwachsene 18 Jahre und älter)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass in den USA "Prozent der Erwachsenen mit irgendeiner körperlichen Funktionsstörung: 16,1%".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf eine breite Palette von Behinderungen, von Menschen mit intellektuellen Behinderungen, die über die am meisten eingeschränkten Fähigkeiten verfügen, bis zu uns allen, wenn wir altern und Schwierigkeiten haben, zu denken und uns zu erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernschwierigkeiten, wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es innerhalb der klinischen Definitionen für kognitive Beeinträchtigungen eine große Vielfalt gibt, aber Menschen mit ihnen erleben eine gemeinsame Reihe von Funktionsproblemen. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, beim Erinnern an Aufgaben und Verwirrung durch inkonsistente Webseitenlayouts.

Eine gute Grundlage für Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Bereitsstellung von Inhalten auf mehr als eine Art, zum Beispiel durch Text-zu-Sprache oder durch Video.
- Leicht verständliche Inhalte, wie Texte, die nach Standards für einfache Sprache verfasst sind.
- Konzentration auf wichtige Inhalte.
- Minimierung von Ablenkungen, wie unnötige Inhalte oder Werbung.
- Konsistentes Webseitenlayout und Navigation.
- Vertraute Elemente, wie durchgezogene Links in blau, wenn nicht besucht, und violett, wenn besucht.
- Prozesse in logische, wesentliche Schritte mit Fortschrittsindikatoren unterteilen.
- Website-Authentifizierung so einfach wie möglich gestalten, ohne die Sicherheit zu mindern.
- Formulare leicht ausfüllen, wie mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Hinweise

- Das Design mit [kognitiver Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) führt zu guten Designpraktiken. Sie werden allen zugutekommen.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch körperliche Behinderungen. Websites müssen den W3C [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) entsprechen, einschließlich [kognitiver Barrierefreiheitsrichtlinien](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die W3C [Cognitive and Learning Disabilities Accessibility Task Force](https://www.w3.org/WAI/GL/task-forces/coga/) entwickelt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive page](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US Centers for Disease Control schätzen, dass im Jahr 2018 1 von 4 US-Bürgern eine Behinderung hat, und von diesen ist [kognitive Beeinträchtigung am häufigsten bei jungen Menschen](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als "geistige Retardierung" bezeichnet. Viele betrachten diesen Begriff jetzt als abwertend, daher sollte seine Verwendung vermieden werden.
- Im Vereinigten Königreich werden einige intellektuelle Behinderungen als "Lernschwierigkeiten" oder "Lernbeeinträchtigungen" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein weit verbreiteter Mythos über Barrierefreiheit ist, dass Barrierefreiheit eine teure "zusätzliche" Implementierung in einem Projekt ist. Dieser Mythos kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine bestehende Website einzubauen, die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie haben erst spät in einem Projekt begonnen, Barrierefreiheit zu berücksichtigen und damit verbundene Probleme festgestellt.

Wenn Sie jedoch Barrierefreiheit von Anfang an in einem Projekt berücksichtigen, sollten die Kosten, um die meisten Inhalte zugänglich zu machen, relativ gering sein.

Berücksichtigen Sie bei der Planung Ihres Projekts die Barrierefreiheitsprüfung in Ihrem Testregime, genau wie das Testen für jedes andere wichtige Zielgruppensegment (z. B. Ziel-Desktop- oder Mobilbrowser). Testen Sie früh und oft, idealerweise indem Sie automatisierte Tests durchführen, um programmgesteuert erkennbare fehlende Funktionen zu identifizieren (wie fehlende Bild [Alternativtexte](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechten Linktext — siehe [Verwenden Sie aussagekräftige Textetiketten](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und einige Tests mit benachteiligten Benutzergruppen durchführen, um zu sehen, wie gut komplexere Seitenfunktionen für sie funktionieren. Zum Beispiel:

- Ist mein Datumsfeld-Widget für Benutzer von Screenreadern verwendbar?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehgeschädigte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch Touch-Benutzer zugänglich?

Sie können und sollten sich mögliche Problembereiche in Ihren Inhalten notieren, die bearbeitet werden müssen, um sie zugänglich zu machen, sicherstellen, dass diese gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren whizzy 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Alle Ihre Multimedia-Inhalte zu transkribieren, ist eine Option, die, obwohl teuer, möglich ist.

Seien Sie auch realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal — es wird immer irgendeinen Randfall geben, der dazu führt, dass ein bestimmter Benutzer bestimmte Inhalte schwierig zu nutzen findet — aber Sie sollten so viel wie möglich tun. Wenn Sie planen, eine whizzy 3D-Kuchendiagramm-Grafik mithilfe von WebGL zu beinhalten, könnten Sie eine Datentabelle als zugängliche alternative Darstellung der Daten enthalten. Oder Sie könnten einfach nur die Tabelle aufnehmen und das 3D-Kuchendiagramm weglassen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger CPU-intensiv und einfacher zu pflegen.

Auf der anderen Seite wäre es unvernünftig, von einer Galerie-Website, die interessante 3D-Kunst zeigt, zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es sich um ein rein visuelles Medium handelt.

Um zu zeigen, dass Sie sich um Barrierefreiheit kümmern und daran gedacht haben, veröffentlichen Sie auf Ihrer Website eine Barrierefreiheitserklärung, die beschreibt, welche Politik Sie in Bezug auf Barrierefreiheit verfolgen und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn Ihnen jemand mitteilt, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihnen, seien Sie einfühlsam und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammenfassend:

- Betrachten Sie Barrierefreiheit vom Beginn eines Projekts an und testen Sie früh und oft. Genauso wie jedes andere Problem wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Denken Sie daran, dass viele bewährte Praktiken zur Barrierefreiheit jedem zugutekommen, nicht nur Nutzern mit Behinderungen. Beispielsweise ist semantisch leanes Markup nicht nur gut für Screenreader, sondern auch schnell zu laden und leistungsfähig. Dies kommt allen zugute, insbesondere denen mit mobilen Geräten und/oder langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und arbeiten Sie mit Menschen zusammen, die Probleme haben.

## Barrierefreiheitsrichtlinien und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze, auf denen die Barrierefreiheitsprüfungen basieren können, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, auf die Sie achten müssen, sowie die hohen Strukturen der für Sie relevantesten Richtlinien zu verstehen.

- Zum Anfang hat das W3C ein großes und sehr detailliertes Dokument veröffentlicht, das sehr genaue, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden als die [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet, und sie sind keineswegs eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu erhalten und zu lernen, ist [WCAG at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es gibt keinen Grund, alle WCAG-Kriterien zu lernen — seien Sie sich der Hauptsorgenbereiche bewusst und verwenden Sie eine Vielzahl von Techniken und Tools, um Bereiche hervorzuheben, die den WCAG-Kriterien nicht entsprechen (siehe unten für mehr).
- Ihr Land könnte auch spezifische Gesetze haben, die vorschreiben, dass Websites, die ihrer Bevölkerung dienen, zugänglich sein müssen — zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Barrierefreie Informationstechnik-Verordnung](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine Liste von [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/) nach Ländern.

Also während die WCAG eine Reihe von Richtlinien ist, wird in Ihrem Land wahrscheinlich Gesetze zur Web-Barrierefreiheit geben, oder zumindest zur Barrierefreiheit von für die Öffentlichkeit zugänglichen Dienstleistungen (was Websites, Fernsehen, physische Räume usw. einschließen könnte). Es ist eine gute Idee, herauszufinden, was Ihre Gesetze sind. Wenn Sie keine Anstrengungen unternehmen, um zu prüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn sich Menschen beschweren.

Das klingt ernst, aber wirklich müssen Sie Barrierefreiheit einfach als oberste Priorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Bei Unsicherheiten holen Sie den Rat eines qualifizierten Anwalts ein. Wir werden keinen Rat mehr als diesen anbieten, weil wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen bereitstellen, die für assistive Technologien (ATs) nützlich sind — ATs neigen dazu, hauptsächlich semantische Informationen zu nutzen, daher umfasst diese Informationen keine Stylings oder JavaScript. Diese Informationen sind in einem Informationsbaum strukturiert, der als **Barrierefreiheitsbaum** bezeichnet wird.

Verschiedene Betriebssysteme haben verschiedene Barrierefreiheits-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility-Framework
- iOS: UIAccessibility

Wo die nativen semantischen Informationen, die von den HTML-Elementen in Ihren Web-Apps bereitgestellt werden, nicht ausreichen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die dem Barrierefreiheitsbaum semantische Informationen hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, Ihnen gezeigt haben, warum sie wichtig ist, und untersucht haben, wie Sie sie in Ihren Workflow integrieren können. Sie sollten nun auch das Verlangen haben, mehr über die Implementierungsdetails zu lernen, die Websites zugänglich machen können, und welche Tools dabei helfen können. Wir werden im nächsten Artikel auf Barrierefreiheits-Tools eingehen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Auto-Captioning-Erweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
