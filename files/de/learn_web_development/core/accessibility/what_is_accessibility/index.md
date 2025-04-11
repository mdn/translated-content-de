---
title: Was ist Barrierefreiheit?
slug: Learn_web_development/Core/Accessibility/What_is_accessibility
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}

Dieser Artikel beginnt das Modul mit einem guten Einblick in das, was Barrierefreiheit ist – dieser Überblick umfasst, welche Personengruppen wir berücksichtigen müssen und warum, welche Werkzeuge verschiedene Menschen nutzen, um mit dem Web zu interagieren, und wie wir Barrierefreiheit in unseren Webentwicklungsworkflow integrieren können.

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
          <li>Der Zweck der Barrierefreiheit — erhöhter Zugang zu digitalen Diensten für Menschen mit zusätzlichen Bedürfnissen, verbesserte Benutzerfreundlichkeit für alle, besseres SEO und eine breitere Zielgruppe.</li>
          <li>Bewusstsein für die gesetzlichen Anforderungen der Barrierefreiheit.</li>
          <li>dass Barrierefreiheit von Anfang an in ein Projekt einbezogen werden sollte und nicht erst am Ende.</li>
          <li>Vertrautheit mit den Konformitätskriterien der Web Content Accessibility Guidelines (WCAG).</li>
          <li>Bewusstsein für Barrierefreiheits-APIs und deren Zweck.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist also Barrierefreiheit?

Barrierefreiheit ist die Praxis, Ihre Websites so zu gestalten, dass sie von möglichst vielen Menschen genutzt werden können. Traditionell denkt man dabei an Menschen mit Behinderungen, aber das Zugänglichmachen von Websites kommt auch anderen Gruppen zugute, wie z.B. Nutzern mobiler Geräte oder solchen mit langsamen Netzwerkverbindungen.

Man könnte Barrierefreiheit auch als die Gleichbehandlung aller betrachten, indem man ihnen die gleichen Möglichkeiten bietet, unabhängig von ihren Fähigkeiten oder Umständen. Genauso wie es falsch ist, jemanden von einem physischen Gebäude auszuschließen, weil er im Rollstuhl sitzt (moderne öffentliche Gebäude verfügen in der Regel über Rollstuhlrampen oder Aufzüge), ist es auch nicht richtig, jemanden von einer Website auszuschließen, weil er eine Sehbehinderung hat. Wir sind alle unterschiedlich, aber wir sind alle Menschen und haben daher die gleichen Menschenrechte.

Barrierefreiheit ist das Richtige. In einigen Ländern ist die Bereitstellung barrierefreier Websites gesetzlich vorgeschrieben, was bedeutende Märkte eröffnen kann, die sonst nicht in der Lage wären, Ihre Dienste zu nutzen oder Ihre Produkte zu kaufen.

Der Aufbau barrierefreier Seiten kommt allen zugute:

- Semantisches HTML, das die Barrierefreiheit verbessert, verbessert auch die SEO und macht Ihre Website auffindbarer.
- Sich um Barrierefreiheit zu kümmern, demonstriert gute Ethik und Moral, was Ihr öffentliches Image verbessert.
- Andere bewährte Praktiken, die die Barrierefreiheit verbessern, machen Ihre Website auch für andere Gruppen nutzbarer, z.B. für Handynutzer oder Benutzer mit geringer Netzwerkgeschwindigkeit. Jeder kann von vielen solchen Verbesserungen profitieren.
- Haben wir erwähnt, dass es in einigen Gegenden auch gesetzlich vorgeschrieben ist?

## Welche Arten von Behinderungen betrachten wir?

Menschen mit Behinderungen sind ebenso vielfältig wie Menschen ohne Behinderungen, und so sind es auch ihre Behinderungen. Der Schlüssel ist, über den eigenen Computer und die eigene Nutzung des Webs hinauszudenken und zu lernen, wie andere das Web nutzen — _Sie sind nicht Ihre Nutzer_. Die Haupttypen von Behinderungen, die zu berücksichtigen sind, werden im Folgenden erläutert, zusammen mit eventuellen Hilfsmitteln, die sie zur Nutzung von Webinhalten verwenden (bekannt als **assistive technologies** oder **ATs**).

> [!NOTE]
> Das [Faktenblatt Behinderung und Gesundheit](https://www.who.int/en/news-room/fact-sheets/detail/disability-and-health) der Weltgesundheitsorganisation (WHO) gibt an, dass "über eine Milliarde Menschen, etwa 15% der Weltbevölkerung, irgendeine Form von Behinderung haben" und dass "zwischen 110 Millionen und 190 Millionen Erwachsene erhebliche Schwierigkeiten beim Funktionieren haben".

### Menschen mit Sehbehinderungen

Menschen mit Sehbehinderungen umfassen Menschen mit Blindheit, geringer Sehstärke und Farbenblindheit. Viele Menschen mit Sehbehinderungen verwenden Bildschirmvergrößerungsgeräte, die entweder physische Vergrößerer oder softwarebasierte Zoom-Funktionen sind. Die meisten Browser und Betriebssysteme verfügen heutzutage über Zoom-Funktionen. Einige Nutzer sind auf Bildschirmleser angewiesen, welche Software ist, die digitale Texte laut vorliest. Beispiele für Bildschirmleser sind:

- Bezahlte kommerzielle Produkte, wie [JAWS](https://www.freedomscientific.com/Products/software/JAWS/) (Windows) und [Dolphin Screen Reader](https://yourdolphin.com/ScreenReader) (Windows).
- Kostenlose Produkte, wie [NVDA](https://www.nvaccess.org/) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (Chrome) und [Orca](https://wiki.gnome.org/Projects/Orca) (Linux).
- In das Betriebssystem integrierte Software, wie [VoiceOver](https://www.apple.com/accessibility/vision/) (macOS, iPadOS, iOS), [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows), [ChromeVox](https://support.google.com/chromebook/answer/7031755) (auf ChromeOS) und [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

Es ist eine gute Idee, sich mit Bildschirmlesern vertraut zu machen; Sie sollten auch einen Bildschirmleser einrichten und ausprobieren, um eine Vorstellung davon zu bekommen, wie er funktioniert. Weitere Informationen zur Verwendung finden Sie in unseren [Bildschirmleser-Tutorials](/de/docs/Learn_web_development/Core/Accessibility/Tooling#screen_readers). Das untenstehende Video bietet ebenfalls ein kurzes Beispiel, wie die Erfahrung aussieht.

{{EmbedYouTube("IK97XMibEws")}}

In Bezug auf Statistiken schätzt die Weltgesundheitsorganisation, dass "weltweit 285 Millionen Menschen geschätzt werden, die visuell beeinträchtigt sind: 39 Millionen sind blind und 246 Millionen haben eine geringe Sehkraft." (siehe [Sehbehinderung und Blindheit](https://www.who.int/en/news-room/fact-sheets/detail/blindness-and-visual-impairment)). Das ist eine große und bedeutende Benutzergruppe, die man nicht ausschließen sollte, nur weil Ihre Website nicht ordnungsgemäß codiert ist — fast so groß wie die Bevölkerung der Vereinigten Staaten von Amerika.

### Menschen mit Hörbehinderungen

[Schwerhörige und taube (DHH)](https://www.nad.org/resources/american-sign-language/community-and-culture-frequently-asked-questions/) Menschen haben unterschiedliche Grade von Hörverlust, von leicht bis schwerwiegend. Obwohl einige von ihnen Hilfsmittel verwenden (siehe [Hilfsmittel für Menschen mit Hör-, Sprach- oder Sprachstörungen](https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders)), sind sie nicht weit verbreitet.

Um den Zugang zu gewährleisten, müssen Textalternativen angeboten werden. Videos sollten manuell mit Untertiteln versehen und Transkripte sollten für Audioinhalte bereitgestellt werden. Darüber hinaus sollte aufgrund hoher Raten von [Sprachdeprivation](https://epicspecialeducationstaffing.com/language-deprivation/#:~:text=Language%20deprivation%20is%20the%20term,therefore%20not%20exposed%20to%20language.) in der DHH-Population [eine Textvereinfachung in Betracht gezogen werden](https://circlcenter.org/collaborative-research-automatic-text-simplification-and-reading-assistance-to-support-self-directed-learning-by-deaf-and-hard-of-hearing-computing-workers/).

Schwerhörige und taube Menschen stellen ebenfalls eine bedeutende Benutzergruppe dar — "466 Millionen Menschen weltweit haben eine beeinträchtigende Hörminderung", so das Faktenblatt der Weltgesundheitsorganisation [Taubheit und Hörverlust](https://www.who.int/en/news-room/fact-sheets/detail/deafness-and-hearing-loss).

### Menschen mit Mobilitätsbeeinträchtigungen

Diese Menschen haben Behinderungen im Bezug auf Bewegung, die rein physische Probleme (wie den Verlust von Gliedmaßen oder Lähmungen) betreffen können oder neurologische/genetische Störungen, die zu Schwäche oder Kontrollverlust in den Gliedmaßen führen. Einige Menschen haben Schwierigkeiten mit den genauen Handbewegungen, die für die Benutzung einer Maus erforderlich sind, während andere schwerwiegender betroffen sein können, vielleicht so stark gelähmt, dass sie einen [Kopfzeiger](https://www.performancehealth.com/adjustable-headpointer) benötigen, um mit Computern zu interagieren.

Diese Art von Behinderung kann auch eine Folge des Alters sein, anstatt eines spezifischen Traumas oder einer Erkrankung, und sie kann auch durch Hardwarebeschränkungen bedingt sein — einige Benutzer besitzen möglicherweise keine Maus.

Die Art und Weise, wie sich dies auf die Webentwicklungsarbeit auswirkt, ist die Anforderung, dass Steuerelemente mit der Tastatur zugänglich sein müssen — wir werden die Tastaturzugänglichkeit in späteren Artikeln des Moduls besprechen, aber es ist eine gute Idee, einige Websites nur mit der Tastatur auszuprobieren, um zu sehen, wie Sie zurechtkommen. Können Sie die Tabulatortaste verwenden, um zwischen den verschiedenen Steuerelementen eines Webformulars zu wechseln, zum Beispiel? Weitere Details zu Tastatursteuerungen finden Sie in unserem Abschnitt [Verwenden Sie, wenn möglich, semantische Benutzeroberflächenelemente](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_semantic_ui_controls_where_possible).

In Bezug auf Statistiken haben viele Menschen Mobilitätsbehinderungen. Die US-amerikanischen Zentren für Krankheitskontrolle und Prävention [Disability and Functioning (Nicht-institutionalisierte Erwachsene ab 18 Jahren)](https://www.cdc.gov/nchs/fastats/disability.htm) berichten, dass "16.1% der Erwachsenen in den USA Schwierigkeiten bei der physischen Funktion haben".

### Menschen mit kognitiven Beeinträchtigungen

Kognitive Beeinträchtigung bezieht sich auf ein breites Spektrum von Behinderungen, von Menschen mit intellektuellen Behinderungen, die die eingeschränktesten Fähigkeiten haben, bis hin zu uns allen, die im Alter Schwierigkeiten haben zu denken und sich zu erinnern. Das Spektrum umfasst Menschen mit psychischen Erkrankungen, wie [Depressionen](https://www.nimh.nih.gov/health/topics/depression) und [Schizophrenie](https://www.nimh.nih.gov/health/topics/schizophrenia). Es umfasst auch Menschen mit Lernbehinderungen, wie [Dyslexie](https://www.nichd.nih.gov/health/topics/learningdisabilities) und [Aufmerksamkeitsdefizit-Hyperaktivitätsstörung](https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd). Wichtig ist, dass es innerhalb der klinischen Definitionen kognitiver Beeinträchtigungen viel Vielfalt gibt. Menschen mit diesen Beeinträchtigungen erleben eine gemeinsame Reihe von funktionalen Problemen. Dazu gehören Schwierigkeiten beim Verstehen von Inhalten, Erinnern an Vorgehensweisen und Verwirrung durch inkonsistente Website-Layouts.

Eine gute Grundlage für die Barrierefreiheit für Menschen mit kognitiven Beeinträchtigungen umfasst:

- Inhalte auf mehr als eine Weise präsentieren, z.B. durch Text-zu-Sprache oder Video.
- Leicht verständlicher Inhalt, z.B. Text, der nach den Standards für einfache Sprache geschrieben ist.
- Den Fokus auf wichtige Inhalte lenken.
- Ablenkungen minimieren, wie unnötige Inhalte oder Werbung.
- Konsistentes Website-Layout und Navigation.
- Vertraute Elemente, wie unterstrichene Links in Blau, wenn nicht besucht, und in Lila, wenn besucht.
- Prozesse in logische, wesentliche Schritte mit Fortschrittsanzeigen unterteilen.
- Website-Authentifizierung so einfach wie möglich gestalten, ohne die Sicherheit zu gefährden.
- Formulare einfach ausfüllen, z.B. mit klaren Fehlermeldungen und einfacher Fehlerbehebung.

### Anmerkungen

- Webseiten, die auf [kognitive Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility) ausgelegt sind, führen zu guten Designpraktiken. Sie kommen allen zugute.
- Viele Menschen mit kognitiven Beeinträchtigungen haben auch physische Behinderungen. Websites müssen den [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) der W3C entsprechen, einschließlich der [Richtlinien zur kognitiven Barrierefreiheit](/de/docs/Web/Accessibility/Guides/Cognitive_accessibility#wcag_guidelines).
- Die [Arbeitsgruppe für Barrierefreiheit bei kognitiven und Lernbehinderungen](https://www.w3.org/WAI/GL/task-forces/coga/) der W3C erstellt Web-Barrierefreiheitsrichtlinien für Menschen mit kognitiven Beeinträchtigungen.
- WebAIM hat eine [Cognitive-Seite](https://webaim.org/articles/cognitive/) mit relevanten Informationen und Ressourcen.
- Die US-Zentren für Krankheitskontrolle schätzen, dass ab 2018 einer von vier US-Bürgern eine Behinderung hat, und dass bei ihnen [kognitive Beeinträchtigung die häufigste bei jungen Menschen ist](https://archive.cdc.gov/www_cdc_gov/media/releases/2018/p0816-disability.html).
- In den USA wurden einige intellektuelle Behinderungen historisch als "geistige Behinderung" bezeichnet. Viele betrachten diesen Begriff jetzt als abwertend, daher sollte seine Verwendung vermieden werden.
- In Großbritannien werden einige intellektuelle Behinderungen als "Lernbehinderungen" oder "Lernschwierigkeiten" bezeichnet.

## Implementierung von Barrierefreiheit in Ihr Projekt

Ein weitverbreiteter Mythos über Barrierefreiheit ist, dass Barrierefreiheit eine teure "zusätzliche Option" ist, die in ein Projekt implementiert werden muss. Diese Annahme kann tatsächlich _wahr_ sein, wenn entweder:

- Sie versuchen, Barrierefreiheit in eine vorhandene Website zu "rückbauen", die erhebliche Barrierefreiheitsprobleme aufweist.
- Sie haben erst spät in einem Projekt begonnen, sich mit Barrierefreiheit zu befassen, und dabei Probleme aufgedeckt.

Wenn Sie jedoch Barrierefreiheit von Anfang an in ein Projekt einbeziehen, sollten die Kosten für die Zugänglichmachung der meisten Inhalte recht minimal sein.

Bei der Planung Ihres Projekts sollten Sie das Testen der Barrierefreiheit in Ihr Testregime einbeziehen, ähnlich wie bei Tests für andere wichtige Zielgruppensegmente (z.B. Ziel-Desktop- oder mobile Browser). Testen Sie früh und häufig, idealerweise indem Sie automatisierte Tests durchführen, um programmatisch erkennbare fehlende Funktionen zu identifizieren (z.B. fehlender Bild-[Alternativtext](/de/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) oder schlechter Linktext — siehe [Verwenden Sie bedeutungsvolle Textbezeichnungen](/de/docs/Learn_web_development/Core/Accessibility/HTML#use_meaningful_text_labels)) und einige Tests mit behinderten Nutzergruppen durchzuführen, um zu sehen, wie gut komplexere Site-Features für sie funktionieren. Zum Beispiel:

- Ist mein Datumsauswahl-Widget von Menschen nutzbar, die Bildschirmleser verwenden?
- Wenn Inhalte dynamisch aktualisiert werden, wissen sehbehinderte Menschen davon?
- Sind meine UI-Schaltflächen sowohl für Tastatur- als auch für Touch-Interface-Benutzer zugänglich?

Sie können und sollten mögliche Problemfelder in Ihren Inhalten, die bearbeitet werden müssen, um sie zugänglich zu machen, notieren, sicherstellen, dass sie gründlich getestet werden, und über Lösungen/Alternativen nachdenken. Textinhalte (wie Sie im nächsten Artikel sehen werden) sind einfach, aber was ist mit Ihren Multimedia-Inhalten und Ihren beeindruckenden 3D-Grafiken? Sie sollten Ihr Projektbudget betrachten und überlegen, welche Lösungen Sie zur Verfügung haben, um solche Inhalte zugänglich zu machen. Alle Ihre Multimedia-Inhalte transkribieren zu lassen, ist eine Option, die zwar teuer ist, aber möglich.

Zudem ist es realistisch. "100% Barrierefreiheit" ist ein unerreichbares Ideal – es wird immer irgendeinen Randfall geben, der dazu führt, dass ein bestimmter Benutzer bestimmten Inhalt schwierig zu nutzen findet – aber Sie sollten so viel wie möglich tun. Wenn Sie planen, ein beeindruckendes 3D-Kuchendiagramm zu verwenden, das mit WebGL erstellt wurde, möchten Sie möglicherweise eine Datentabelle als zugängliche alternative Darstellung der Daten einfügen. Oder Sie entscheiden sich, einfach die Tabelle zu verwenden und das 3D-Kuchendiagramm zu entfernen — die Tabelle ist für alle zugänglich, schneller zu codieren, weniger ressourcenintensiv und einfacher zu warten.

Andererseits, wenn Sie an einer Galerie-Website arbeiten, die interessante 3D-Kunst zeigt, wäre es unvernünftig, zu erwarten, dass jedes Kunstwerk perfekt für sehbehinderte Menschen zugänglich ist, da es sich um ein völlig visuelles Medium handelt.

Um zu zeigen, dass es Ihnen wichtig ist und Sie Barrierefreiheit durchdacht haben, veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website, die darlegt, welche Ihre Politik gegenüber Barrierefreiheit ist, und welche Schritte Sie unternommen haben, um die Website zugänglich zu machen. Wenn jemand Sie darauf hinweist, dass Ihre Website ein Barrierefreiheitsproblem hat, beginnen Sie einen Dialog mit ihm, zeigen Sie Empathie und unternehmen Sie angemessene Schritte, um das Problem zu beheben.

Zusammengefasst:

- Berücksichtigen Sie Barrierefreiheit von Anfang an bei einem Projekt und testen Sie früh und häufig. Wie bei jedem anderen Fehler wird ein Barrierefreiheitsproblem teurer zu beheben, je später es entdeckt wird.
- Beachten Sie, dass viele bewährte Praktiken zur Barrierefreiheit allen zugutekommen, nicht nur Nutzern mit Behinderungen. Beispielsweise ist schlanker semantischer Code nicht nur gut für Bildschirmleser, sondern auch schnell zu laden und performant. Dies kommt allen zugute, insbesondere denen auf mobilen Geräten und/oder mit langsamen Verbindungen.
- Veröffentlichen Sie eine Barrierefreiheitserklärung auf Ihrer Website und engagieren Sie sich mit Personen, die Probleme haben.

## Richtlinien zur Barrierefreiheit und das Gesetz

Es gibt zahlreiche Checklisten und Richtliniensätze, auf denen Barrierefreiheitstests basieren können, was auf den ersten Blick überwältigend erscheinen mag. Unser Rat ist, sich mit den grundlegenden Bereichen vertraut zu machen, auf die man achten muss, sowie das Verständnis für die hochrangigen Strukturen der für Sie relevanten Richtlinien.

- Zuallererst hat das W3C ein umfassendes und sehr detailliertes Dokument veröffentlicht, das sehr präzise, technologieunabhängige Kriterien für die Barrierefreiheitskonformität enthält. Diese werden als [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG) bezeichnet und sind keinesfalls eine kurze Lektüre. Die Kriterien sind in vier Hauptkategorien unterteilt, die spezifizieren, wie Implementierungen wahrnehmbar, bedienbar, verständlich und robust gemacht werden können. Der beste Ort, um eine leichte Einführung zu bekommen und anzufangen zu lernen, ist [WCAG auf einen Blick](https://www.w3.org/WAI/standards-guidelines/wcag/glance/). Es ist nicht erforderlich, alle WCAG-Kriterien zu lernen – seien Sie sich der wichtigsten Bereiche bewusst und verwenden Sie verschiedene Techniken und Werkzeuge, um alle Bereiche hervorzuheben, die nicht den WCAG-Kriterien entsprechen (siehe weiter unten für mehr).
- Ihr Land kann auch spezifische Gesetze haben, die die Notwendigkeit regeln, dass Websites, die ihrer Bevölkerung dienen, zugänglich sind – zum Beispiel [EN 301 549](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/02.01.02_60/en_301549v020102p.pdf) in der EU, [Section 508 of the Rehabilitation Act](https://www.section508.gov/training/) in den USA, [Bundesverordnung zur barrierefreien Informationstechnik](https://www.aktion-mensch.de/inklusion/barrierefreiheit/barrierefreie-website) in Deutschland, die [Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/introduction/made) im Vereinigten Königreich, [Accessibilità](https://www.agid.gov.it/it/ambiti-intervento/accessibilita-usabilita) in Italien, das [Disability Discrimination Act](https://humanrights.gov.au/our-work/disability-rights/publications/guidelines-equal-access-digital-goods-and-services) in Australien usw. Das W3C führt eine Liste der [Gesetze und Richtlinien zur Barrierefreiheit im Web](https://www.w3.org/WAI/policies/) nach Ländern.

Während die WCAG eine Reihe von Richtlinien sind, werden Ihr Land wahrscheinlich Gesetze zur Regelung der Web-Barrierefreiheit haben, oder zumindest für die Zugänglichkeit von öffentlich zugänglichen Diensten (zu denen Webseiten, Fernsehen, physische Räume usw. gehören könnten). Es ist eine gute Idee herauszufinden, was Ihre lokalen Gesetze sind. Wenn Sie keinen Versuch unternehmen, zu überprüfen, ob Ihre Inhalte zugänglich sind, könnten Sie rechtlich haftbar gemacht werden, wenn sich Menschen beschweren.

Das klingt ernst, aber im Grunde müssen Sie nur die Barrierefreiheit als Hauptpriorität Ihrer Webentwicklungspraktiken betrachten, wie oben beschrieben. Bei Zweifeln holen Sie sich Rat von einem qualifizierten Anwalt. Wir werden keine weiteren Ratschläge geben, da wir keine Anwälte sind.

## Barrierefreiheits-APIs

Webbrowser nutzen spezielle **Barrierefreiheits-APIs** (bereitgestellt vom zugrunde liegenden Betriebssystem), die Informationen für Hilfstechnologien (ATs) bereitstellen — ATs verwenden in der Regel semantische Informationen, daher umfassen diese Informationen keine Stylinginformationen oder JavaScript. Diese Informationen sind in einem Informationsbaum strukturiert, der als **Barrierefreiheit-Baum** bezeichnet wird.

Unterschiedliche Betriebssysteme haben unterschiedliche Barrierefreiheits-APIs zur Verfügung:

- Windows: MSAA/IAccessible, UIAExpress, IAccessible2
- macOS: NSAccessibility
- Linux: AT-SPI
- Android: Accessibility Framework
- iOS: UIAccessibility

Wo die im nativen HTML Ihrer Webanwendungen bereitgestellten semantischen Informationen nicht ausreichen, können Sie sie mit Funktionen aus der [WAI-ARIA-Spezifikation](https://www.w3.org/TR/wai-aria/) ergänzen, die semantische Informationen zum Barrierefreiheit-Baum hinzufügen, um die Barrierefreiheit zu verbessern. Sie können viel mehr über das WAI-ARIA in unserem Artikel [WAI-ARIA Grundlagen](/de/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) lernen.

## Zusammenfassung

Dieser Artikel sollte Ihnen einen nützlichen Überblick über Barrierefreiheit gegeben haben, gezeigt haben, warum sie wichtig ist, und wie Sie sie in Ihren Workflow integrieren können. Sie sollten jetzt auch den Wunsch haben, mehr über die Implementierungsdetails zu erfahren, die Websites barrierefrei machen können, und welche Werkzeuge dabei helfen können. Im nächsten Artikel werden wir uns mit den Werkzeugen für die Barrierefreiheit befassen.

## Siehe auch

- [WCAG](/de/docs/Web/Accessibility/Guides/Understanding_WCAG)

  - [Wahrnehmbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable)
  - [Bedienbar](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable)
  - [Verständlich](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable)
  - [Robust](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Robust)

- [Google Chrome hat eine Auto-Untertitel-Erweiterung veröffentlicht](https://blog.google/products/chrome/live-caption-chrome/)

{{NextMenu("Learn_web_development/Core/Accessibility/Tooling", "Learn_web_development/Core/Accessibility")}}
